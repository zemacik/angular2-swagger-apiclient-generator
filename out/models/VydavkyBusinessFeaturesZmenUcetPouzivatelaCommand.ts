import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesZmenUcetPouzivatelaCommand {
		ucetId: number;
		ucetNazov: string;
		ucetMenaId: number;
		jePrimarny: boolean;
		ucetTypUctuId: number;
		ucetCisloUctu: string;
		ucetExpiraciaKartyMesiac: number;
		ucetExpiraciaKartyRok: number;
		ucetVlastnikUctu: string;
		ucetPoznamka: string;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}