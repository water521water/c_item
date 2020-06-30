(*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *)

(** Method signature with annotations. *)

open! IStd

type t =
  { nullsafe_mode: NullsafeMode.t
  ; model_source: model_source option  (** None, if signature is not modelled *)
  ; ret: ret_signature
  ; params: param_signature list }
[@@deriving compare]

and ret_signature = {ret_annotation_deprecated: Annot.Item.t; ret_annotated_type: AnnotatedType.t}
[@@deriving compare]

and param_signature =
  { param_annotation_deprecated: Annot.Item.t
  ; mangled: Mangled.t
  ; param_annotated_type: AnnotatedType.t }
[@@deriving compare]

and model_source = InternalModel | ThirdPartyRepo of {filename: string; line_number: int}
[@@deriving compare]

val set_modelled_nullability : Procname.t -> t -> model_source -> bool * bool list -> t
(** Override nullability for a function signature given its modelled nullability (for ret value and
    params) *)

val get : is_callee_in_trust_list:bool -> nullsafe_mode:NullsafeMode.t -> ProcAttributes.t -> t
(** Get a method signature with annotations from a proc_attributes. *)

val get_for_class_under_analysis : Tenv.t -> ProcAttributes.t -> t
(** Signature of the method belonging to the currently analyzed class. *)

val pp : Procname.t -> Format.formatter -> t -> unit
(** Pretty print a method signature with annotations. *)