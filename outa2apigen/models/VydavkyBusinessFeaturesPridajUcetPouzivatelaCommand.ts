import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesPridajUcetPouzivatelaCommand {
		nazov: string;
		menaId: number;
		jePrimarny: boolean;
		typUctuId: number;
		cisloUctu: string;
		expiraciaKartyMesiac: number;
		expiraciaKartyRok: number;
		vlastnikUctu: string;
		poznamka: string;
		ucetLokalizacia: string;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}