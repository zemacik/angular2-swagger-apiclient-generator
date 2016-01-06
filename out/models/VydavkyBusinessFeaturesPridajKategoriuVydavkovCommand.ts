import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesPridajKategoriuVydavkovCommand {
		ucetId: number;
		nazov: string;
		poradie: number;
		farba: string;
		mesacnyRozpocet: number;
		rocnyRozpocet: number;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}