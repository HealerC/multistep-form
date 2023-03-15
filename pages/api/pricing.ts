import { promises as fs } from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

const pricingDirectory = path.join(process.cwd(), "pricing", "pricing.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pricing = await getPricing();
  res.status(200).json(pricing);
}

async function getPricing() {
  return await fs.readFile(pricingDirectory, "utf8");
}
