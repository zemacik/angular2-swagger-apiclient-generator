import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesZmenKategoriuVydavkovCommand {
		kategoriaVydavkuId: number;
		nazov: string;
		poradie: number;
		farba: string;
		mesacnyRozpocet: number;
		rocnyRozpocet: number;
		ucetMenaSkratka: string;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}