import { VydavkyInfrastructureCQRSRequestMetadata } from "./VydavkyInfrastructureCQRSRequestMetadata"

export class VydavkyBusinessFeaturesZmenPrijemCommand {
		prijemId: number;
		ucetId: number;
		suma: number;
		nazov: string;
		poznamka: string;
		datumPrijmu: string;
		jeOcakavany: boolean;
		jeSablona: boolean;
		jePociatocnyStavUctuVRoku: boolean;
		vytvorenyZoSablonyPrijemId: number;

		metadata: VydavkyInfrastructureCQRSRequestMetadata;
}