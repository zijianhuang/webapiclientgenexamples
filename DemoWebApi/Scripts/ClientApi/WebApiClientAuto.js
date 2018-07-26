///<reference path="../typings/jquery/jquery.d.ts" />
///<reference path="HttpClient.ts" />
var DemoWebApi_DemoData_Client;
(function (DemoWebApi_DemoData_Client) {
    let AddressType;
    (function (AddressType) {
        AddressType[AddressType["Postal"] = 0] = "Postal";
        AddressType[AddressType["Residential"] = 1] = "Residential";
    })(AddressType = DemoWebApi_DemoData_Client.AddressType || (DemoWebApi_DemoData_Client.AddressType = {}));
    let Days;
    (function (Days) {
        Days[Days["Sat"] = 1] = "Sat";
        Days[Days["Sun"] = 2] = "Sun";
        Days[Days["Mon"] = 3] = "Mon";
        Days[Days["Tue"] = 4] = "Tue";
        Days[Days["Wed"] = 5] = "Wed";
        /**
         * Thursday
         */
        Days[Days["Thu"] = 6] = "Thu";
        Days[Days["Fri"] = 7] = "Fri";
    })(Days = DemoWebApi_DemoData_Client.Days || (DemoWebApi_DemoData_Client.Days = {}));
    /**
     * Phone type
     * Tel, Mobile, Skyp and Fax
     */
    let PhoneType;
    (function (PhoneType) {
        /**
         * Land line
         */
        PhoneType[PhoneType["Tel"] = 0] = "Tel";
        /**
         * Mobile phone
         */
        PhoneType[PhoneType["Mobile"] = 1] = "Mobile";
        PhoneType[PhoneType["Skype"] = 2] = "Skype";
        PhoneType[PhoneType["Fax"] = 3] = "Fax";
    })(PhoneType = DemoWebApi_DemoData_Client.PhoneType || (DemoWebApi_DemoData_Client.PhoneType = {}));
})(DemoWebApi_DemoData_Client || (DemoWebApi_DemoData_Client = {}));
var DemoWebApi_Controllers_Client;
(function (DemoWebApi_Controllers_Client) {
    class Entities {
        constructor(baseUri = HttpClient.locationOrigin, httpClient = new HttpClient(), error, statusCode) {
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * PUT api/SuperDemo/link?id={id}&relationship={relationship}
         * @param {number} id
         * @param {string} relationship
         * @param {DemoWebApi_DemoData_Client.Person} person
         * @return {boolean}
         */
        linkPerson(id, relationship, person, callback) {
            this.httpClient.put(this.baseUri + 'api/SuperDemo/link?id=' + id + '&relationship=' + encodeURIComponent(relationship), person, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/Company?id={id}
         * @param {number} id
         * @return {DemoWebApi_DemoData_Client.Company}
         */
        getCompany(id, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/Company?id=' + id, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/PersonNotFound?id={id}
         * @param {number} id
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        getPersonNotFound(id, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/PersonNotFound?id=' + id, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/PersonActionNotFound?id={id}
         * @param {number} id
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        getPersonActionNotFound(id, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/PersonActionNotFound?id=' + id, callback, this.error, this.statusCode);
        }
        /**
         * Get a person
         * so to know the person
         * GET api/Entities/{id}
         * @param {number} id unique id of that guy
         * @return {DemoWebApi_DemoData_Client.Person} person in db
         */
        getPerson(id, callback) {
            this.httpClient.get(this.baseUri + 'api/Entities/' + id, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Entities
         * @param {DemoWebApi_DemoData_Client.Person} p
         * @return {number}
         */
        createPerson(p, callback) {
            this.httpClient.post(this.baseUri + 'api/Entities', p, callback, this.error, this.statusCode);
        }
        /**
         * PUT api/Entities
         * @param {DemoWebApi_DemoData_Client.Person} person
         * @return {void}
         */
        updatePerson(person, callback) {
            this.httpClient.put(this.baseUri + 'api/Entities', person, callback, this.error, this.statusCode);
        }
        /**
         * DELETE api/Entities/{id}
         * @param {number} id
         * @return {void}
         */
        delete(id, callback) {
            this.httpClient.delete(this.baseUri + 'api/Entities/' + id, callback, this.error, this.statusCode);
        }
    }
    DemoWebApi_Controllers_Client.Entities = Entities;
    class SuperDemo {
        constructor(baseUri = HttpClient.locationOrigin, httpClient = new HttpClient(), error, statusCode) {
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/SuperDemo/int?d={d}
         * @param {number} d
         * @return {number}
         */
        getIntSquare(d, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/int?d=' + d, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/decimal?d={d}
         * @param {number} d
         * @return {number}
         */
        getDecimalSquare(d, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/decimal?d=' + d, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NullableDatetime?hasValue={hasValue}
         * @param {boolean} hasValue
         * @return {Date}
         */
        getDateTime(hasValue, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NullableDatetime?hasValue=' + hasValue, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NextYear?dt={dt}
         * @param {Date} dt
         * @return {Date}
         */
        getNextYear(dt, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NextYear?dt=' + dt, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NextHour?dt={dt}
         * @param {Date} dt
         * @return {Date}
         */
        getNextHour(dt, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NextHour?dt=' + dt, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/NextYear
         * @param {Date} dt
         * @return {Date}
         */
        postNextYear(dt, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/NextYear', dt, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/DateTimeOffset
         * @return {Date}
         */
        getDateTimeOffset(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/DateTimeOffset', callback, this.error, this.statusCode);
        }
        /**
         * DateTime and DateTimeOffset may not be represented well in URL, so must put them into the POST body.
         * POST api/SuperDemo/DateTimeOffset
         * @param {Date} d
         * @return {boolean}
         */
        postDateTimeOffset(d, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/DateTimeOffset', d, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/DateTimeOffsetNullable
         * @param {Date} d
         * @return {boolean}
         */
        postDateTimeOffsetNullable(d, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/DateTimeOffsetNullable', d, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NullableDecimal?hasValue={hasValue}
         * @param {boolean} hasValue
         * @return {number}
         */
        getNullableDecimal(hasValue, callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NullableDecimal?hasValue=' + hasValue, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/FloatZero
         * @return {number}
         */
        getFloatZero(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/FloatZero', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/DoubleZero
         * @return {number}
         */
        getDoubleZero(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/DoubleZero', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/DecimalZero
         * @return {number}
         */
        getDecimalZero(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/DecimalZero', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NullString
         * @return {string}
         */
        getNullString(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NullString', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/EmptyString
         * @return {string}
         */
        getEmptyString(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/EmptyString', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/NullObject
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        getNullPerson(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/NullObject', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/TextStream
         * @return {any}
         */
        getTextStream(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/TextStream', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ByteArray
         * @return {Array<number>}
         */
        getByteArray(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ByteArray', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ActionResult
         * @return {any}
         */
        getActionResult(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ActionResult', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ActionStringResult
         * @return {string}
         */
        getActionStringResult(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ActionStringResult', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/byte
         * @return {number}
         */
        getbyte(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/byte', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/sbyte
         * @return {number}
         */
        getsbyte(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/sbyte', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/short
         * @return {number}
         */
        getShort(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/short', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ushort
         * @return {number}
         */
        getUShort(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ushort', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/uint
         * @return {number}
         */
        getUint(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/uint', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ulong
         * @return {number}
         */
        getulong(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ulong', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/doulbe
         * @return {number}
         */
        getdouble(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/doulbe', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/decimal
         * @return {number}
         */
        getDecimal(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/decimal', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/char
         * @return {string}
         */
        getChar(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/char', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/bool
         * @return {boolean}
         */
        getBool(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/bool', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/int2d
         * @return {number[][]}
         */
        getInt2D(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/int2d', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/int2dJagged
         * @return {Array<Array<number>>}
         */
        getInt2DJagged(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/int2dJagged', callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/int2d
         * @param {number[][]} a
         * @return {boolean}
         */
        postInt2D(a, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/int2d', a, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/int2djagged
         * @param {Array<Array<number>>} a
         * @return {boolean}
         */
        postInt2DJagged(a, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/int2djagged', a, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/intArray
         * @param {Array<number>} a
         * @return {boolean}
         */
        postIntArray(a, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/intArray', a, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/intArray
         * @return {Array<number>}
         */
        getIntArray(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/intArray', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/AnonymousDynamic
         * @return {any}
         */
        getAnonymousDynamic(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/AnonymousDynamic', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/AnonymousObject
         * @return {any}
         */
        getAnonymousObject(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/AnonymousObject', callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/AnonymousObject
         * @param {any} obj
         * @return {any}
         */
        postAnonymousObject(obj, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/AnonymousObject', obj, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/StringStringDic
         * @return {{[id: string]: string }}
         */
        getDictionary(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/StringStringDic', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/StringPersonDic
         * @return {{[id: string]: DemoWebApi_DemoData_Client.Person }}
         */
        getDictionaryOfPeople(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/StringPersonDic', callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/StringPersonDic
         * @param {{[id: string]: DemoWebApi_DemoData_Client.Person }} dic
         * @return {number}
         */
        postDictionary(dic, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/StringPersonDic', dic, callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/KeyValuePair
         * @return {{key: string, value: DemoWebApi_DemoData_Client.Person }}
         */
        getKeyhValuePair(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/KeyValuePair', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/ICollection
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getICollection(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/ICollection', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/IList
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getIList(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/IList', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/IReadOnlyList
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getIReadOnlyList(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/IReadOnlyList', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/IReadOnlyCollection
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getIReadOnlyCollection(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/List
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getList(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/List', callback, this.error, this.statusCode);
        }
        /**
         * GET api/SuperDemo/Collection
         * @return {Array<DemoWebApi_DemoData_Client.Person>}
         */
        getCollection(callback) {
            this.httpClient.get(this.baseUri + 'api/SuperDemo/Collection', callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/ICollection
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postICollection(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/ICollection', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/IList
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postIList(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/IList', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/IReadOnlyList
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postIReadOnlyList(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/IReadOnlyList', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/IReadOnlyCollection
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postIReadOnlyCollection(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/List
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postList(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/List', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/Collection
         * @param {Array<DemoWebApi_DemoData_Client.Person>} list
         * @return {number}
         */
        postCollection(list, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/Collection', list, callback, this.error, this.statusCode);
        }
        /**
         * POST api/SuperDemo/PostEmpty?s={s}&i={i}
         * @param {string} s
         * @param {number} i
         * @return {{item1:string, item2:number}}
         */
        postWithQueryButEmptyBody(s, i, callback) {
            this.httpClient.post(this.baseUri + 'api/SuperDemo/PostEmpty?s=' + encodeURIComponent(s) + '&i=' + i, null, callback, this.error, this.statusCode);
        }
    }
    DemoWebApi_Controllers_Client.SuperDemo = SuperDemo;
    class Tuple {
        constructor(baseUri = HttpClient.locationOrigin, httpClient = new HttpClient(), error, statusCode) {
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * POST api/Tuple/PersonCompany1
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPersonCompany1(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PersonCompany1', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany2
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany2(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany2', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany3
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany3(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany3', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany4
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany4(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany4', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/PeopleCompany4
         * @return {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Company}}
         */
        getPeopleCompany4(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/PeopleCompany4', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany5
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Person, item5:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany5(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany5', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/PeopleCompany5
         * @return {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Person, item5:DemoWebApi_DemoData_Client.Company}}
         */
        getPeopleCompany5(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/PeopleCompany5', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany6
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Person, item5:DemoWebApi_DemoData_Client.Person, item6:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany6(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany6', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany7
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Person, item5:DemoWebApi_DemoData_Client.Person, item6:DemoWebApi_DemoData_Client.Person, item7:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany7(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany7', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/PeopleCompany8
         * @param {{item1:DemoWebApi_DemoData_Client.Person, item2:DemoWebApi_DemoData_Client.Person, item3:DemoWebApi_DemoData_Client.Person, item4:DemoWebApi_DemoData_Client.Person, item5:DemoWebApi_DemoData_Client.Person, item6:DemoWebApi_DemoData_Client.Person, item7:DemoWebApi_DemoData_Client.Person, rest:DemoWebApi_DemoData_Client.Company}} peopleAndCompany
         * @return {DemoWebApi_DemoData_Client.Person}
         */
        linkPeopleCompany8(peopleAndCompany, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/PeopleCompany8', peopleAndCompany, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple1
         * @return {{item1:number}}
         */
        getTuple1(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple1', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple1
         * @param {{item1:number}} tuple
         * @return {number}
         */
        postTuple1(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple1', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple2
         * @return {{item1:string, item2:number}}
         */
        getTuple2(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple2', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple2
         * @param {{item1:string, item2:number}} tuple
         * @return {string}
         */
        postTuple2(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple2', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple3
         * @return {{item1:string, item2:string, item3:number}}
         */
        getTuple3(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple3', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple3
         * @param {{item1:string, item2:string, item3:number}} tuple
         * @return {string}
         */
        postTuple3(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple3', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple4
         * @return {{item1:string, item2:string, item3:string, item4:number}}
         */
        getTuple4(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple4', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple4
         * @param {{item1:string, item2:string, item3:string, item4:number}} tuple
         * @return {string}
         */
        postTuple4(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple4', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple5
         * @return {{item1:string, item2:string, item3:string, item4:string, item5:number}}
         */
        getTuple5(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple5', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple5
         * @param {{item1:string, item2:string, item3:string, item4:string, item5:number}} tuple
         * @return {string}
         */
        postTuple5(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple5', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple6
         * @return {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:number}}
         */
        getTuple6(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple6', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple6
         * @param {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:number}} tuple
         * @return {string}
         */
        postTuple6(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple6', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple7
         * @return {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:number, item7:number}}
         */
        getTuple7(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple7', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple7
         * @param {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:number, item7:number}} tuple
         * @return {string}
         */
        postTuple7(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple7', tuple, callback, this.error, this.statusCode);
        }
        /**
         * GET api/Tuple/Tuple8
         * @return {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:string, item7:number, rest:{item1:string, item2:string, item3:string}}}
         */
        getTuple8(callback) {
            this.httpClient.get(this.baseUri + 'api/Tuple/Tuple8', callback, this.error, this.statusCode);
        }
        /**
         * POST api/Tuple/Tuple8
         * @param {{item1:string, item2:string, item3:string, item4:string, item5:string, item6:string, item7:string, rest:{item1:string, item2:string, item3:string}}} tuple
         * @return {string}
         */
        postTuple8(tuple, callback) {
            this.httpClient.post(this.baseUri + 'api/Tuple/Tuple8', tuple, callback, this.error, this.statusCode);
        }
    }
    DemoWebApi_Controllers_Client.Tuple = Tuple;
    class Values {
        constructor(baseUri = HttpClient.locationOrigin, httpClient = new HttpClient(), error, statusCode) {
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * GET api/Values
         * @return {Array<string>}
         */
        get(callback) {
            this.httpClient.get(this.baseUri + 'api/Values', callback, this.error, this.statusCode);
        }
        /**
         * GET api/Values/{id}?name={name}
         * @param {number} id
         * @param {string} name
         * @return {string}
         */
        getByIdAndName(id, name, callback) {
            this.httpClient.get(this.baseUri + 'api/Values/' + id + '?name=' + encodeURIComponent(name), callback, this.error, this.statusCode);
        }
        /**
         * GET api/Values?name={name}
         * @param {string} name
         * @return {string}
         */
        getByName(name, callback) {
            this.httpClient.get(this.baseUri + 'api/Values?name=' + encodeURIComponent(name), callback, this.error, this.statusCode);
        }
        /**
         * POST api/Values
         * @param {string} value
         * @return {string}
         */
        post(value, callback) {
            this.httpClient.post(this.baseUri + 'api/Values', value, callback, this.error, this.statusCode);
        }
        /**
         * PUT api/Values/{id}
         * @param {number} id
         * @param {string} value
         * @return {void}
         */
        put(id, value, callback) {
            this.httpClient.put(this.baseUri + 'api/Values/' + id, value, callback, this.error, this.statusCode);
        }
        /**
         * DELETE api/Values/{id}
         * @param {number} id
         * @return {void}
         */
        delete(id, callback) {
            this.httpClient.delete(this.baseUri + 'api/Values/' + id, callback, this.error, this.statusCode);
        }
    }
    DemoWebApi_Controllers_Client.Values = Values;
    class Heroes {
        constructor(baseUri = HttpClient.locationOrigin, httpClient = new HttpClient(), error, statusCode) {
            this.baseUri = baseUri;
            this.httpClient = httpClient;
            this.error = error;
            this.statusCode = statusCode;
        }
        /**
         * Get all heroes.
         * GET api/Heroes
         * @return {Array<DemoWebApi_Controllers_Client.Hero>}
         */
        get(callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes', callback, this.error, this.statusCode);
        }
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         * @param {number} id
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        getById(id, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        }
        /**
         * DELETE api/Heroes/{id}
         * @param {number} id
         * @return {void}
         */
        delete(id, callback) {
            this.httpClient.delete(this.baseUri + 'api/Heroes/' + id, callback, this.error, this.statusCode);
        }
        /**
         * Add a hero
         * POST api/Heroes?name={name}
         * @param {string} name
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        post(name, callback) {
            this.httpClient.post(this.baseUri + 'api/Heroes?name=' + encodeURIComponent(name), null, callback, this.error, this.statusCode);
        }
        /**
         * Update hero.
         * PUT api/Heroes
         * @param {DemoWebApi_Controllers_Client.Hero} hero
         * @return {DemoWebApi_Controllers_Client.Hero}
         */
        put(hero, callback) {
            this.httpClient.put(this.baseUri + 'api/Heroes', hero, callback, this.error, this.statusCode);
        }
        /**
         * Search heroes
         * GET api/Heroes?name={name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        search(name, callback) {
            this.httpClient.get(this.baseUri + 'api/Heroes?name=' + encodeURIComponent(name), callback, this.error, this.statusCode);
        }
    }
    DemoWebApi_Controllers_Client.Heroes = Heroes;
})(DemoWebApi_Controllers_Client || (DemoWebApi_Controllers_Client = {}));
//# sourceMappingURL=WebApiClientAuto.js.map