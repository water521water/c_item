(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

open! IStd
open PulseBasicInterface
module AbductiveDomain = PulseAbductiveDomain
module Arithmetic = PulseArithmetic

type t =
  | AccessToInvalidAddress of Diagnostic.access_to_invalid_address
  | ReadUninitializedValue of Diagnostic.read_uninitialized_value
[@@deriving compare, equal, yojson_of]

let to_diagnostic = function
  | AccessToInvalidAddress access_to_invalid_address ->
      Diagnostic.AccessToInvalidAddress access_to_invalid_address
  | ReadUninitializedValue read_uninitialized_value ->
      Diagnostic.ReadUninitializedValue read_uninitialized_value


let add_call call_and_loc = function
  | AccessToInvalidAddress access ->
      AccessToInvalidAddress {access with calling_context= call_and_loc :: access.calling_context}
  | ReadUninitializedValue read ->
      ReadUninitializedValue {read with calling_context= call_and_loc :: read.calling_context}


let is_manifest (astate : AbductiveDomain.summary) =
  Arithmetic.has_no_assumptions (astate :> AbductiveDomain.t)


(* require a summary because we don't want to stop reporting because some non-abducible condition is
   not true as calling context cannot possibly influence such conditions *)
let should_report (access_error : AbductiveDomain.summary PulseAccessResult.error) =
  match access_error with
  | ReportableError {astate; diagnostic} -> (
    match diagnostic with
    | MemoryLeak _ | StackVariableAddressEscape _ ->
        (* these issues are reported regardless of the calling context, not sure if that's the right
           decision yet *)
        `ReportNow (astate, diagnostic)
    | AccessToInvalidAddress latent ->
        if is_manifest astate then `ReportNow (astate, diagnostic)
        else `DelayReport (astate, AccessToInvalidAddress latent)
    | ReadUninitializedValue latent ->
        if is_manifest astate then `ReportNow (astate, diagnostic)
        else `DelayReport (astate, ReadUninitializedValue latent) )
  | ISLError astate ->
      `ISLDelay astate