import { VydavkyBusinessFeaturesNacitajUcetPouzivatelaPouzivatelUctu_ResultListItem } from "./VydavkyBusinessFeaturesNacitajUcetPouzivatelaPouzivatelUctu_ResultListItem"
import { VydavkyInfrastructureCQRSQueryResultMetadata } from "./VydavkyInfrastructureCQRSQueryResultMetadata"
import { VydavkyInfrastructureCQRSRequestResultMetadata } from "./VydavkyInfrastructureCQRSRequestResultMetadata"

export class VydavkyBusinessFeaturesNacitajUcetPouzivatelaResult {
		ucetId: number;
		ucetNazov: string;
		ucetMenaId: number;
		ucetDatumPridaniaUTC: string;
		ucetPouzivatelPridal: string;
		ucetDatumZmenyUTC: string;
		ucetPouzivatelZmenil: string;
		ucetTypUctuId: number;
		ucetTypUctuNazov: string;
		ucetCisloUctu: string;
		ucetExpiraciaKartyMesiac: number;
		ucetExpiraciaKartyRok: number;
		ucetVlastnikUctu: string;
		ucetPoznamka: string;
		jePrimarny: boolean;
		nezobrazovat: boolean;
		pristupovePravo: string;

		pouzivateliaUctu: VydavkyBusinessFeaturesNacitajUcetPouzivatelaPouzivatelUctu_ResultListItem[];
		queryMetadata: VydavkyInfrastructureCQRSQueryResultMetadata;
		requestMetadata: VydavkyInfrastructureCQRSRequestResultMetadata;
}