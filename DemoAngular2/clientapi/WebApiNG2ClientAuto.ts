import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
export namespace DemoWebApi_Controllers_Client {

	/**
	 * This class is used to carry the result of various file uploads.
	 */
	export interface FileResult {

		/**
		 * Gets or sets the local path of the file saved on the server.
		 */
		fileNames?: Array<string>;

		/**
		 * Gets or sets the submitter as indicated in the HTML form used to upload the data.
		 */
		submitter?: string;
	}


	/**
	 * Complex hero type
	 */
	export interface Hero {
		id?: number;
		name?: string;
	}

}

export namespace DemoWebApi_DemoData_Client {
	export interface Address {
		city?: string;
		country?: string;
		id?: string;
		postalCode?: string;
		state?: string;
		street1?: string;
		street2?: string;
		type?: DemoWebApi_DemoData_Client.AddressType;
		location?: DemoWebApi_DemoData_Another_Client.MyPoint;
	}

	export enum AddressType { Postal, Residential }

	export interface Company extends DemoWebApi_DemoData_Client.Entity {

		/**
		 * BusinessNumber to be serialized as BusinessNum
		 */
		BusinessNum?: string;
		businessNumberType?: string;
		textMatrix?: Array<Array<string>>;
		int2D?: number[][];
		int2DJagged?: Array<Array<number>>;
		lines?: Array<string>;
	}

	export enum Days {
		Sat = 1,
		Sun = 2,
		Mon = 3,
		Tue = 4,
		Wed = 5,

		/**
		 * Thursday
		 */
		Thu = 6,
		Fri = 7
	}


	/**
	 * Base class of company and person
	 */
	export interface Entity {

		/**
		 * Multiple addresses
		 */
		addresses?: Array<DemoWebApi_DemoData_Client.Address>;
		id?: string;

		/**
		 * Name of the entity.
		 */
		name: string;
		phoneNumbers?: Array<DemoWebApi_DemoData_Client.PhoneNumber>;
	}

	export interface MyPeopleDic {
		anotherDic?: {[id: string]: string };
		dic?: {[id: string]: DemoWebApi_DemoData_Client.Person };
		intDic?: {[id: number]: string };
	}

	export interface Person extends DemoWebApi_DemoData_Client.Entity {

		/**
		 * Date of Birth.
		 * This is optional.
		 */
		dob?: Date;
		givenName?: string;
		surname?: string;
	}

	export interface PhoneNumber {
		fullNumber?: string;
		phoneType?: DemoWebApi_DemoData_Client.PhoneType;
	}


	/**
	 * Phone type
	 * Tel, Mobile, Skyp and Fax
	 */
	export enum PhoneType {

		/**
		 * Land line
		 */
		Tel,

		/**
		 * Mobile phone
		 */
		Mobile,
		Skype,
		Fax
	}

}

export namespace DemoWebApi_DemoData_Another_Client {

	/**
	 * 2D position
	 * with X and Y
	 * for Demo
	 */
	export interface MyPoint {

		/**
		 * X
		 */
		x: number;

		/**
		 * Y
		 */
		y: number;
	}

}

export namespace DemoWebApi_Models_Client {
	export interface AddExternalLoginBindingModel {
		externalAccessToken?: string;
	}

	export interface ChangePasswordBindingModel {
		confirmPassword?: string;
		newPassword?: string;
		OldPwd: string;
	}

	export interface RegisterBindingModel {
		confirmPassword?: string;
		email?: string;
		password?: string;
	}

	export interface RegisterExternalBindingModel {
		email?: string;
	}

	export interface RemoveLoginBindingModel {
		loginProvider?: string;
		providerKey?: string;
	}

	export interface SetPasswordBindingModel {
		confirmPassword?: string;
		newPassword?: string;
	}

}

export namespace DemoWebApi_Controllers_Client {
	@Injectable()
	export class Entities {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * POST api/Entities/createPerson
		 */
		createPerson(p: DemoWebApi_DemoData_Client.Person): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Entities/createPerson', JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DELETE api/Entities/{id}
		 */
		delete(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Entities/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Entities/Company?id={id}
		 */
		getCompany(id: number): Observable<DemoWebApi_DemoData_Client.Company> {
			return this.http.get<DemoWebApi_DemoData_Client.Company>(this.baseUri + 'api/Entities/Company?id=' + id);
		}

		/**
		 * Get a person
		 * so to know the person
		 * GET api/Entities/getPerson?id={id}
		 * @param {number} id unique id of that guy
		 * @return {DemoWebApi_DemoData_Client.Person} person in db
		 */
		getPerson(id: number): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/getPerson?id=' + id);
		}

		/**
		 * GET api/Entities/PersonActionNotFound?id={id}
		 */
		getPersonActionNotFound(id: number): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/PersonActionNotFound?id=' + id);
		}

		/**
		 * GET api/Entities/PersonNotFound?id={id}
		 */
		getPersonNotFound(id: number): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Entities/PersonNotFound?id=' + id);
		}

		/**
		 * PUT api/Entities/link?id={id}&relationship={relationship}
		 */
		linkPerson(id: number, relationship: string, person: DemoWebApi_DemoData_Client.Person): Observable<boolean> {
			return this.http.put<boolean>(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + (relationship == null ? '' : encodeURIComponent(relationship)), JSON.stringify(person), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Entities/linkNewDecimal?id={id}
		 */
		linkWithNewDecimal(id: number, p: DemoWebApi_DemoData_Client.Person): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Entities/linkNewDecimal?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Entities/linkNewGuid?id={id}
		 */
		linkWithNewGuid(id: string, p: DemoWebApi_DemoData_Client.Person): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Entities/linkNewGuid?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Entities/linkLong?id={id}
		 */
		linkWithNewLong(id: number, p: DemoWebApi_DemoData_Client.Person): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Entities/linkLong?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * PUT api/Entities/updatePerson
		 */
		updatePerson(person: DemoWebApi_DemoData_Client.Person): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Entities/updatePerson', JSON.stringify(person), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

	@Injectable()
	export class Heroes {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DELETE api/Heroes/{id}
		 */
		delete(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Heroes/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Get all heroes.
		 * GET api/Heroes
		 */
		get(): Observable<Array<DemoWebApi_Controllers_Client.Hero>> {
			return this.http.get<Array<DemoWebApi_Controllers_Client.Hero>>(this.baseUri + 'api/Heroes');
		}

		/**
		 * Get a hero.
		 * GET api/Heroes/{id}
		 */
		getById(id: number): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.get<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes/' + id);
		}

		/**
		 * POST api/Heroes?name={name}
		 */
		post(name: string): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.post<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes?name=' + (name == null ? '' : encodeURIComponent(name)), null);
		}

		/**
		 * Add a hero
		 * POST api/Heroes/q?name={name}
		 */
		postWithQuery(name: string): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.post<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes/q?name=' + (name == null ? '' : encodeURIComponent(name)), null);
		}

		/**
		 * Update hero.
		 * PUT api/Heroes
		 */
		put(hero: DemoWebApi_Controllers_Client.Hero): Observable<DemoWebApi_Controllers_Client.Hero> {
			return this.http.put<DemoWebApi_Controllers_Client.Hero>(this.baseUri + 'api/Heroes', JSON.stringify(hero), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Search heroes
		 * GET api/Heroes/search?name={name}
		 * @param {string} name keyword contained in hero name.
		 * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
		 */
		search(name: string): Observable<Array<DemoWebApi_Controllers_Client.Hero>> {
			return this.http.get<Array<DemoWebApi_Controllers_Client.Hero>>(this.baseUri + 'api/Heroes/search?name=' + (name == null ? '' : encodeURIComponent(name)));
		}
	}

	@Injectable()
	export class SuperDemo {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET api/SuperDemo/ActionResult
		 */
		getActionResult(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/ActionResult', { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/ActionStringResult
		 */
		getActionStringResult(): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/SuperDemo/ActionStringResult');
		}

		/**
		 * GET api/SuperDemo/AnonymousDynamic
		 */
		getAnonymousDynamic(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/AnonymousDynamic', { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/AnonymousObject
		 */
		getAnonymousObject(): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/AnonymousObject', { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/SuperDemo/bool
		 */
		getBool(): Observable<boolean> {
			return this.http.get<boolean>(this.baseUri + 'api/SuperDemo/bool');
		}

		/**
		 * GET api/SuperDemo/byte
		 */
		getbyte(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/byte');
		}

		/**
		 * GET api/SuperDemo/ByteArray
		 */
		getByteArray(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/ByteArray');
		}

		/**
		 * GET api/SuperDemo/char
		 */
		getChar(): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/SuperDemo/char');
		}

		/**
		 * GET api/SuperDemo/Collection
		 */
		getCollection(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/Collection');
		}

		/**
		 * True to return now, false to return null
		 * GET api/SuperDemo/NullableDatetime?hasValue={hasValue}
		 */
		getDateTime(hasValue: boolean): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/NullableDatetime?hasValue=' + hasValue);
		}

		/**
		 * GET api/SuperDemo/DateTimeOffset
		 */
		getDateTimeOffset(): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/DateTimeOffset');
		}

		/**
		 * GET api/SuperDemo/decimal
		 */
		getDecimal(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/decimal');
		}

		/**
		 * GET api/SuperDemo/decimal?d={d}
		 */
		getDecimalSquare(d: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/decimal?d=' + d);
		}

		/**
		 * GET api/SuperDemo/DecimalZero
		 */
		getDecimalZero(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/DecimalZero');
		}

		/**
		 * GET api/SuperDemo/StringStringDic
		 */
		getDictionary(): Observable<{[id: string]: string }> {
			return this.http.get<{[id: string]: string }>(this.baseUri + 'api/SuperDemo/StringStringDic');
		}

		/**
		 * GET api/SuperDemo/StringPersonDic
		 */
		getDictionaryOfPeople(): Observable<{[id: string]: DemoWebApi_DemoData_Client.Person }> {
			return this.http.get<{[id: string]: DemoWebApi_DemoData_Client.Person }>(this.baseUri + 'api/SuperDemo/StringPersonDic');
		}

		/**
		 * GET api/SuperDemo/doulbe
		 */
		getdouble(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/doulbe');
		}

		/**
		 * Result of 0.1d + 0.2d - 0.3d
		 * GET api/SuperDemo/DoubleZero
		 */
		getDoubleZero(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/DoubleZero');
		}

		/**
		 * GET api/SuperDemo/EmptyString
		 */
		getEmptyString(): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/SuperDemo/EmptyString');
		}

		/**
		 * GET api/SuperDemo/FloatZero
		 */
		getFloatZero(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/FloatZero');
		}

		/**
		 * GET api/SuperDemo/ICollection
		 */
		getICollection(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/ICollection');
		}

		/**
		 * GET api/SuperDemo/IList
		 */
		getIList(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IList');
		}

		/**
		 * GET api/SuperDemo/int2d
		 */
		getInt2D(): Observable<number[][]> {
			return this.http.get<number[][]>(this.baseUri + 'api/SuperDemo/int2d');
		}

		/**
		 * GET api/SuperDemo/int2dJagged
		 */
		getInt2DJagged(): Observable<Array<Array<number>>> {
			return this.http.get<Array<Array<number>>>(this.baseUri + 'api/SuperDemo/int2dJagged');
		}

		/**
		 * GET api/SuperDemo/intArray
		 */
		getIntArray(): Observable<Array<number>> {
			return this.http.get<Array<number>>(this.baseUri + 'api/SuperDemo/intArray');
		}

		/**
		 * GET api/SuperDemo/int?d={d}
		 */
		getIntSquare(d: number): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/int?d=' + d);
		}

		/**
		 * GET api/SuperDemo/IReadOnlyCollection
		 */
		getIReadOnlyCollection(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IReadOnlyCollection');
		}

		/**
		 * GET api/SuperDemo/IReadOnlyList
		 */
		getIReadOnlyList(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/IReadOnlyList');
		}

		/**
		 * GET api/SuperDemo/KeyValuePair
		 */
		getKeyhValuePair(): Observable<{key: string, value: DemoWebApi_DemoData_Client.Person }> {
			return this.http.get<{key: string, value: DemoWebApi_DemoData_Client.Person }>(this.baseUri + 'api/SuperDemo/KeyValuePair');
		}

		/**
		 * GET api/SuperDemo/List
		 */
		getList(): Observable<Array<DemoWebApi_DemoData_Client.Person>> {
			return this.http.get<Array<DemoWebApi_DemoData_Client.Person>>(this.baseUri + 'api/SuperDemo/List');
		}

		/**
		 * GET api/SuperDemo/NextHour?dt={dt}
		 */
		getNextHour(dt: Date): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/NextHour?dt=' + dt.toISOString());
		}

		/**
		 * GET api/SuperDemo/NextHourNullable?n={n}&dt={dt}
		 */
		getNextHourNullable(n: number, dt: Date): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/NextHourNullable?n=' + n + (dt ? '&dt=' + dt.toISOString() : ''));
		}

		/**
		 * GET api/SuperDemo/NextYear?dt={dt}
		 */
		getNextYear(dt: Date): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/NextYear?dt=' + dt.toISOString());
		}

		/**
		 * GET api/SuperDemo/NextYearNullable?n={n}&dt={dt}
		 */
		getNextYearNullable(n: number, dt: Date): Observable<Date> {
			return this.http.get<Date>(this.baseUri + 'api/SuperDemo/NextYearNullable?n=' + n + (dt ? '&dt=' + dt.toISOString() : ''));
		}

		/**
		 * True to return 100, and false to return null
		 * GET api/SuperDemo/NullableDecimal?hasValue={hasValue}
		 */
		getNullableDecimal(hasValue: boolean): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/NullableDecimal?hasValue=' + hasValue);
		}

		/**
		 * GET api/SuperDemo/NullObject
		 */
		getNullPerson(): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.get<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/SuperDemo/NullObject');
		}

		/**
		 * GET api/SuperDemo/NullString
		 */
		getNullString(): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/SuperDemo/NullString');
		}

		/**
		 * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
		 */
		getPrimitiveNullable(location: string, dd: number, de: number): Observable<{item1: string, item2: number, item3: number}> {
			return this.http.get<{item1: string, item2: number, item3: number}>(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + (location == null ? '' : encodeURIComponent(location)) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''));
		}

		/**
		 * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
		 */
		getPrimitiveNullable2(dd: number, de: number): Observable<{item1: number, item2: number}> {
			return this.http.get<{item1: number, item2: number}>(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''));
		}

		/**
		 * GET api/SuperDemo/sbyte
		 */
		getsbyte(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/sbyte');
		}

		/**
		 * GET api/SuperDemo/short
		 */
		getShort(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/short');
		}

		/**
		 * GET api/SuperDemo/TextStream
		 */
		getTextStream(): Observable<HttpResponse<Blob>> {
			return this.http.get(this.baseUri + 'api/SuperDemo/TextStream', { observe: 'response', responseType: 'blob' });
		}

		/**
		 * GET api/SuperDemo/uint
		 */
		getUint(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/uint');
		}

		/**
		 * GET api/SuperDemo/ulong
		 */
		getulong(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/ulong');
		}

		/**
		 * GET api/SuperDemo/ushort
		 */
		getUShort(): Observable<number> {
			return this.http.get<number>(this.baseUri + 'api/SuperDemo/ushort');
		}

		/**
		 * POST api/SuperDemo/AnonymousObject
		 */
		postAnonymousObject(obj: any): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'api/SuperDemo/AnonymousObject', JSON.stringify(obj), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * POST api/SuperDemo/Collection
		 */
		postCollection(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/Collection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * DateTime and DateTimeOffset may not be represented well in URL, so must put them into the POST body.
		 * POST api/SuperDemo/DateTimeOffset
		 */
		postDateTimeOffset(d: Date): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/DateTimeOffset', JSON.stringify(d), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/DateTimeOffsetNullable
		 */
		postDateTimeOffsetNullable(d: Date): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/DateTimeOffsetNullable', JSON.stringify(d), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/StringPersonDic
		 */
		postDictionary(dic: {[id: string]: DemoWebApi_DemoData_Client.Person }): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/StringPersonDic', JSON.stringify(dic), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/ICollection
		 */
		postICollection(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/ICollection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/IList
		 */
		postIList(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IList', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/int2d
		 */
		postInt2D(a: number[][]): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/int2d', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/int2djagged
		 */
		postInt2DJagged(a: Array<Array<number>>): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/int2djagged', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/intArray
		 */
		postIntArray(a: Array<number>): Observable<boolean> {
			return this.http.post<boolean>(this.baseUri + 'api/SuperDemo/intArray', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/IReadOnlyCollection
		 */
		postIReadOnlyCollection(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/IReadOnlyList
		 */
		postIReadOnlyList(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/IReadOnlyList', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/List
		 */
		postList(list: Array<DemoWebApi_DemoData_Client.Person>): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/SuperDemo/List', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/NextYear
		 */
		postNextYear(dt: Date): Observable<Date> {
			return this.http.post<Date>(this.baseUri + 'api/SuperDemo/NextYear', JSON.stringify(dt), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/SuperDemo/PostEmpty?s={s}&i={i}
		 */
		postWithQueryButEmptyBody(s: string, i: number): Observable<{item1: string, item2: number}> {
			return this.http.post<{item1: string, item2: number}>(this.baseUri + 'api/SuperDemo/PostEmpty?s=' + (s == null ? '' : encodeURIComponent(s)) + '&i=' + i, null);
		}

		/**
		 * GET api/SuperDemo/SearchDateRange?startDate={startDate}&endDate={endDate}
		 */
		searchDateRange(startDate: Date, endDate: Date): Observable<{item1: Date, item2: Date}> {
			return this.http.get<{item1: Date, item2: Date}>(this.baseUri + 'api/SuperDemo/SearchDateRange?' + (startDate ? 'startDate=' + startDate.toISOString() : '') + (endDate ? '&endDate=' + endDate.toISOString() : ''));
		}
	}

	@Injectable()
	export class Tuple {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * GET api/Tuple/PeopleCompany4
		 */
		getPeopleCompany4(): Observable<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}> {
			return this.http.get<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}>(this.baseUri + 'api/Tuple/PeopleCompany4');
		}

		/**
		 * GET api/Tuple/PeopleCompany5
		 */
		getPeopleCompany5(): Observable<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}> {
			return this.http.get<{item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}>(this.baseUri + 'api/Tuple/PeopleCompany5');
		}

		/**
		 * GET api/Tuple/Tuple1
		 */
		getTuple1(): Observable<{item1: number}> {
			return this.http.get<{item1: number}>(this.baseUri + 'api/Tuple/Tuple1');
		}

		/**
		 * GET api/Tuple/Tuple2
		 */
		getTuple2(): Observable<{item1: string, item2: number}> {
			return this.http.get<{item1: string, item2: number}>(this.baseUri + 'api/Tuple/Tuple2');
		}

		/**
		 * GET api/Tuple/Tuple3
		 */
		getTuple3(): Observable<{item1: string, item2: string, item3: number}> {
			return this.http.get<{item1: string, item2: string, item3: number}>(this.baseUri + 'api/Tuple/Tuple3');
		}

		/**
		 * GET api/Tuple/Tuple4
		 */
		getTuple4(): Observable<{item1: string, item2: string, item3: string, item4: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: number}>(this.baseUri + 'api/Tuple/Tuple4');
		}

		/**
		 * GET api/Tuple/Tuple5
		 */
		getTuple5(): Observable<{item1: string, item2: string, item3: string, item4: string, item5: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: number}>(this.baseUri + 'api/Tuple/Tuple5');
		}

		/**
		 * GET api/Tuple/Tuple6
		 */
		getTuple6(): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}>(this.baseUri + 'api/Tuple/Tuple6');
		}

		/**
		 * GET api/Tuple/Tuple7
		 */
		getTuple7(): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}>(this.baseUri + 'api/Tuple/Tuple7');
		}

		/**
		 * GET api/Tuple/Tuple8
		 */
		getTuple8(): Observable<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}> {
			return this.http.get<{item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: number, rest: {item1: string, item2: string, item3: string}}>(this.baseUri + 'api/Tuple/Tuple8');
		}

		/**
		 * POST api/Tuple/PeopleCompany2
		 */
		linkPeopleCompany2(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany2', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany3
		 */
		linkPeopleCompany3(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany3', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany4
		 */
		linkPeopleCompany4(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany4', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany5
		 */
		linkPeopleCompany5(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany5', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany6
		 */
		linkPeopleCompany6(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany6', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany7
		 */
		linkPeopleCompany7(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany7', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PeopleCompany8
		 */
		linkPeopleCompany8(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Person, item3: DemoWebApi_DemoData_Client.Person, item4: DemoWebApi_DemoData_Client.Person, item5: DemoWebApi_DemoData_Client.Person, item6: DemoWebApi_DemoData_Client.Person, item7: DemoWebApi_DemoData_Client.Person, rest: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PeopleCompany8', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/PersonCompany1
		 */
		linkPersonCompany1(peopleAndCompany: {item1: DemoWebApi_DemoData_Client.Person, item2: DemoWebApi_DemoData_Client.Company}): Observable<DemoWebApi_DemoData_Client.Person> {
			return this.http.post<DemoWebApi_DemoData_Client.Person>(this.baseUri + 'api/Tuple/PersonCompany1', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple1
		 */
		postTuple1(tuple: {item1: number}): Observable<number> {
			return this.http.post<number>(this.baseUri + 'api/Tuple/Tuple1', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple2
		 */
		postTuple2(tuple: {item1: string, item2: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple2', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple3
		 */
		postTuple3(tuple: {item1: string, item2: string, item3: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple3', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple4
		 */
		postTuple4(tuple: {item1: string, item2: string, item3: string, item4: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple4', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple5
		 */
		postTuple5(tuple: {item1: string, item2: string, item3: string, item4: string, item5: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple5', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple6
		 */
		postTuple6(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple6', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple7
		 */
		postTuple7(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: number, item7: number}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple7', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * POST api/Tuple/Tuple8
		 */
		postTuple8(tuple: {item1: string, item2: string, item3: string, item4: string, item5: string, item6: string, item7: string, rest: {item1: string, item2: string, item3: string}}): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Tuple/Tuple8', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	@Injectable()
	export class Values {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * DELETE api/Values/{id}
		 */
		delete(id: number): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'api/Values/' + id, { observe: 'response', responseType: 'text' });
		}

		/**
		 * GET api/Values
		 */
		get(): Observable<Array<string>> {
			return this.http.get<Array<string>>(this.baseUri + 'api/Values');
		}

		/**
		 * GET api/Values/{id}?name={name}
		 */
		getByIdAndName(id: number, name: string): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Values/' + id + '?name=' + (name == null ? '' : encodeURIComponent(name)));
		}

		/**
		 * GET api/Values?name={name}
		 */
		getByName(name: string): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Values?name=' + (name == null ? '' : encodeURIComponent(name)));
		}

		/**
		 * GET api/Values/{id}
		 */
		getById(id: number): Observable<string> {
			return this.http.get<string>(this.baseUri + 'api/Values/' + id);
		}

		/**
		 * POST api/Values
		 */
		post(value: string): Observable<string> {
			return this.http.post<string>(this.baseUri + 'api/Values', JSON.stringify(value), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * PUT api/Values/{id}
		 */
		put(id: number, value: string): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'api/Values/' + id, JSON.stringify(value), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

