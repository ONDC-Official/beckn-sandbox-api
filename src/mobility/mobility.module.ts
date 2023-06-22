import { OndcModule } from "src/ondc/ondc.module";

import { Module } from "@nestjs/common";

import { MobilityController } from "./mobility.controller";
import { MobilityService } from "./mobility.service";

@Module({
    controllers: [MobilityController],
    providers: [MobilityService],
})
export class MobilityModule { }
