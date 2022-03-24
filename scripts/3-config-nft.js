import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x0bab1780DD7A6649B755504EF81F4be4549d038a",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Proboscis monkey",
                description: "This NFT will give you access to BigLieDAO: You need a big nose to be a part of it!",
                image: readFileSync("scripts/assets/bignose.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");

    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()