import { VydavkyInfrastructureCQRSQueryResultMetadata } from "./VydavkyInfrastructureCQRSQueryResultMetadata"
import { VydavkyInfrastructureCQRSRequestResultMetadata } from "./VydavkyInfrastructureCQRSRequestResultMetadata"

export class VydavkyBusinessFeaturesNacitajPrijemResult {
		prijemId: number;
		ucetId: number;
		ucetMenaSkratka: string;
		ucetNazov: string;
		suma: number;
		nazov: string;
		poznamka: string;
		datumPrijmu: string;
		jePociatocnyStavUctuVRoku: boolean;
		jeOcakavany: boolean;
		jeSablona: boolean;
		vytvorenyZoSablonyPrijemId: number;
		datumPridaniaUTC: string;
		pouzivatelPridal: string;
		datumZmenyUTC: string;
		pouzivatelZmenil: string;

		queryMetadata: VydavkyInfrastructureCQRSQueryResultMetadata;
		requestMetadata: VydavkyInfrastructureCQRSRequestResultMetadata;
}