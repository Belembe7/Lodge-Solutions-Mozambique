import type { Dictionary } from "./core";

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>>(
  base: T,
  patch: DeepPartial<T>,
): T {
  const result: Record<string, unknown> = { ...base };

  for (const key of Object.keys(patch) as (keyof T & string)[]) {
    const patchValue = patch[key];
    const baseValue = base[key];

    if (patchValue === undefined) continue;

    if (Array.isArray(patchValue)) {
      result[key] = patchValue;
      continue;
    }

    if (isObject(patchValue) && isObject(baseValue)) {
      result[key] = deepMerge(
        baseValue as Record<string, unknown>,
        patchValue as DeepPartial<Record<string, unknown>>,
      );
      continue;
    }

    result[key] = patchValue;
  }

  return result as T;
}

/** Completa traduções parciais com o dicionário inglês como fallback. */
export function fromEnglish(
  base: Dictionary,
  patch: DeepPartial<Dictionary>,
): Dictionary {
  return deepMerge(base as unknown as Record<string, unknown>, patch) as Dictionary;
}
