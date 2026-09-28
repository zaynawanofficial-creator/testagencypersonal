declare const __SITE_MODE__: "preview" | "release";
interface ImportMetaEnv {
  /** HTTPS endpoint of the approved form-delivery service. Unset = enquiries NOT ACTIVATED. */
  readonly PUBLIC_FORM_ENDPOINT?: string;
}
interface ImportMeta { readonly env: ImportMetaEnv; }
