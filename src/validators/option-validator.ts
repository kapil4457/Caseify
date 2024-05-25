// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      descritption: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Soft Polycarbonate",
      value: "poly_carbonate",
      descritption: "Scratch-resistant coating.",
      price: PRODUCT_PRICES.material.poly_carbonate,
    },
  ],
} as const;
export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Smooth",
      value: "smooth",
      descritption: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: "Textured Finish",
      value: "textured",
      descritption: "Soft grippy texture.",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
