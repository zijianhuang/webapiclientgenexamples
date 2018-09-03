"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var DemoWebApi_DemoData_Client;
(function (DemoWebApi_DemoData_Client) {
    var AddressType;
    (function (AddressType) {
        AddressType[AddressType["Postal"] = 0] = "Postal";
        AddressType[AddressType["Residential"] = 1] = "Residential";
    })(AddressType = DemoWebApi_DemoData_Client.AddressType || (DemoWebApi_DemoData_Client.AddressType = {}));
    var Days;
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
    var PhoneType;
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
})(DemoWebApi_DemoData_Client = exports.DemoWebApi_DemoData_Client || (exports.DemoWebApi_DemoData_Client = {}));
var DemoWebApi_Controllers_Client;
(function (DemoWebApi_Controllers_Client) {
    var Entities = /** @class */ (function () {
        function Entities(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * POST api/Entities/createPerson
         */
        Entities.prototype.createPerson = function (p) {
            return this.http.post(this.baseUri + 'api/Entities/createPerson', JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * DELETE api/Entities/{id}
         */
        Entities.prototype.delete = function (id) {
            return this.http.delete(this.baseUri + 'api/Entities/' + id);
        };
        /**
         * GET api/Entities/Company?id={id}
         */
        Entities.prototype.getCompany = function (id) {
            return this.http.get(this.baseUri + 'api/Entities/Company?id=' + id);
        };
        /**
         * Get a person
         * so to know the person
         * GET api/Entities/getPerson?id={id}
         * @param {number} id unique id of that guy
         * @return {DemoWebApi_DemoData_Client.Person} person in db
         */
        Entities.prototype.getPerson = function (id) {
            return this.http.get(this.baseUri + 'api/Entities/getPerson?id=' + id);
        };
        /**
         * GET api/Entities/PersonActionNotFound?id={id}
         */
        Entities.prototype.getPersonActionNotFound = function (id) {
            return this.http.get(this.baseUri + 'api/Entities/PersonActionNotFound?id=' + id);
        };
        /**
         * GET api/Entities/PersonNotFound?id={id}
         */
        Entities.prototype.getPersonNotFound = function (id) {
            return this.http.get(this.baseUri + 'api/Entities/PersonNotFound?id=' + id);
        };
        /**
         * PUT api/Entities/link?id={id}&relationship={relationship}
         */
        Entities.prototype.linkPerson = function (id, relationship, person) {
            return this.http.put(this.baseUri + 'api/Entities/link?id=' + id + '&relationship=' + encodeURIComponent(relationship), JSON.stringify(person), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Entities/linkNewDecimal?id={id}
         */
        Entities.prototype.linkWithNewDecimal = function (id, p) {
            return this.http.post(this.baseUri + 'api/Entities/linkNewDecimal?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Entities/linkNewGuid?id={id}
         */
        Entities.prototype.linkWithNewGuid = function (id, p) {
            return this.http.post(this.baseUri + 'api/Entities/linkNewGuid?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Entities/linkLong?id={id}
         */
        Entities.prototype.linkWithNewLong = function (id, p) {
            return this.http.post(this.baseUri + 'api/Entities/linkLong?id=' + id, JSON.stringify(p), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * PUT api/Entities/updatePerson
         */
        Entities.prototype.updatePerson = function (person) {
            return this.http.put(this.baseUri + 'api/Entities/updatePerson', JSON.stringify(person), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        Entities = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri')),
            __metadata("design:paramtypes", [String, http_1.HttpClient])
        ], Entities);
        return Entities;
    }());
    DemoWebApi_Controllers_Client.Entities = Entities;
    var Heroes = /** @class */ (function () {
        function Heroes(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * DELETE api/Heroes/{id}
         */
        Heroes.prototype.delete = function (id) {
            return this.http.delete(this.baseUri + 'api/Heroes/' + id);
        };
        /**
         * Get all heroes.
         * GET api/Heroes
         */
        Heroes.prototype.get = function () {
            return this.http.get(this.baseUri + 'api/Heroes');
        };
        /**
         * Get a hero.
         * GET api/Heroes/{id}
         */
        Heroes.prototype.getById = function (id) {
            return this.http.get(this.baseUri + 'api/Heroes/' + id);
        };
        /**
         * POST api/Heroes?name={name}
         */
        Heroes.prototype.post = function (name) {
            return this.http.post(this.baseUri + 'api/Heroes?name=' + encodeURIComponent(name), null, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * Add a hero
         * POST api/Heroes/q?name={name}
         */
        Heroes.prototype.postWithQuery = function (name) {
            return this.http.post(this.baseUri + 'api/Heroes/q?name=' + encodeURIComponent(name), null, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * Update hero.
         * PUT api/Heroes
         */
        Heroes.prototype.put = function (hero) {
            return this.http.put(this.baseUri + 'api/Heroes', JSON.stringify(hero), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * Search heroes
         * GET api/Heroes/search?name={name}
         * @param {string} name keyword contained in hero name.
         * @return {Array<DemoWebApi_Controllers_Client.Hero>} Hero array matching the keyword.
         */
        Heroes.prototype.search = function (name) {
            return this.http.get(this.baseUri + 'api/Heroes/search?name=' + encodeURIComponent(name));
        };
        Heroes = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri')),
            __metadata("design:paramtypes", [String, http_1.HttpClient])
        ], Heroes);
        return Heroes;
    }());
    DemoWebApi_Controllers_Client.Heroes = Heroes;
    var SuperDemo = /** @class */ (function () {
        function SuperDemo(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * GET api/SuperDemo/ActionResult
         */
        SuperDemo.prototype.getActionResult = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ActionResult', { observe: 'response', responseType: 'text' });
        };
        /**
         * GET api/SuperDemo/ActionStringResult
         */
        SuperDemo.prototype.getActionStringResult = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ActionStringResult');
        };
        /**
         * GET api/SuperDemo/AnonymousDynamic
         */
        SuperDemo.prototype.getAnonymousDynamic = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/AnonymousDynamic');
        };
        /**
         * GET api/SuperDemo/AnonymousObject
         */
        SuperDemo.prototype.getAnonymousObject = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/AnonymousObject');
        };
        /**
         * GET api/SuperDemo/bool
         */
        SuperDemo.prototype.getBool = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/bool');
        };
        /**
         * GET api/SuperDemo/byte
         */
        SuperDemo.prototype.getbyte = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/byte');
        };
        /**
         * GET api/SuperDemo/ByteArray
         */
        SuperDemo.prototype.getByteArray = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ByteArray');
        };
        /**
         * GET api/SuperDemo/char
         */
        SuperDemo.prototype.getChar = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/char');
        };
        /**
         * GET api/SuperDemo/Collection
         */
        SuperDemo.prototype.getCollection = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/Collection');
        };
        /**
         * True to return now, false to return null
         * GET api/SuperDemo/NullableDatetime?hasValue={hasValue}
         */
        SuperDemo.prototype.getDateTime = function (hasValue) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NullableDatetime?hasValue=' + hasValue);
        };
        /**
         * GET api/SuperDemo/DateTimeOffset
         */
        SuperDemo.prototype.getDateTimeOffset = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/DateTimeOffset');
        };
        /**
         * GET api/SuperDemo/decimal
         */
        SuperDemo.prototype.getDecimal = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/decimal');
        };
        /**
         * GET api/SuperDemo/decimal?d={d}
         */
        SuperDemo.prototype.getDecimalSquare = function (d) {
            return this.http.get(this.baseUri + 'api/SuperDemo/decimal?d=' + d);
        };
        /**
         * GET api/SuperDemo/DecimalZero
         */
        SuperDemo.prototype.getDecimalZero = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/DecimalZero');
        };
        /**
         * GET api/SuperDemo/StringStringDic
         */
        SuperDemo.prototype.getDictionary = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/StringStringDic');
        };
        /**
         * GET api/SuperDemo/StringPersonDic
         */
        SuperDemo.prototype.getDictionaryOfPeople = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/StringPersonDic');
        };
        /**
         * GET api/SuperDemo/doulbe
         */
        SuperDemo.prototype.getdouble = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/doulbe');
        };
        /**
         * Result of 0.1d + 0.2d - 0.3d
         * GET api/SuperDemo/DoubleZero
         */
        SuperDemo.prototype.getDoubleZero = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/DoubleZero');
        };
        /**
         * GET api/SuperDemo/EmptyString
         */
        SuperDemo.prototype.getEmptyString = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/EmptyString');
        };
        /**
         * GET api/SuperDemo/FloatZero
         */
        SuperDemo.prototype.getFloatZero = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/FloatZero');
        };
        /**
         * GET api/SuperDemo/ICollection
         */
        SuperDemo.prototype.getICollection = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ICollection');
        };
        /**
         * GET api/SuperDemo/IList
         */
        SuperDemo.prototype.getIList = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/IList');
        };
        /**
         * GET api/SuperDemo/int2d
         */
        SuperDemo.prototype.getInt2D = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/int2d');
        };
        /**
         * GET api/SuperDemo/int2dJagged
         */
        SuperDemo.prototype.getInt2DJagged = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/int2dJagged');
        };
        /**
         * GET api/SuperDemo/intArray
         */
        SuperDemo.prototype.getIntArray = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/intArray');
        };
        /**
         * GET api/SuperDemo/int?d={d}
         */
        SuperDemo.prototype.getIntSquare = function (d) {
            return this.http.get(this.baseUri + 'api/SuperDemo/int?d=' + d);
        };
        /**
         * GET api/SuperDemo/IReadOnlyCollection
         */
        SuperDemo.prototype.getIReadOnlyCollection = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/IReadOnlyCollection');
        };
        /**
         * GET api/SuperDemo/IReadOnlyList
         */
        SuperDemo.prototype.getIReadOnlyList = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/IReadOnlyList');
        };
        /**
         * GET api/SuperDemo/KeyValuePair
         */
        SuperDemo.prototype.getKeyhValuePair = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/KeyValuePair');
        };
        /**
         * GET api/SuperDemo/List
         */
        SuperDemo.prototype.getList = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/List');
        };
        /**
         * GET api/SuperDemo/NextHour?dt={dt}
         */
        SuperDemo.prototype.getNextHour = function (dt) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NextHour?dt=' + dt.toISOString());
        };
        /**
         * GET api/SuperDemo/NextHourNullable?n={n}&dt={dt}
         */
        SuperDemo.prototype.getNextHourNullable = function (n, dt) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NextHourNullable?n=' + n + (dt ? '&dt=' + dt.toISOString() : ''));
        };
        /**
         * GET api/SuperDemo/NextYear?dt={dt}
         */
        SuperDemo.prototype.getNextYear = function (dt) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NextYear?dt=' + dt.toISOString());
        };
        /**
         * GET api/SuperDemo/NextYearNullable?n={n}&dt={dt}
         */
        SuperDemo.prototype.getNextYearNullable = function (n, dt) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NextYearNullable?n=' + n + (dt ? '&dt=' + dt.toISOString() : ''));
        };
        /**
         * True to return 100, and false to return null
         * GET api/SuperDemo/NullableDecimal?hasValue={hasValue}
         */
        SuperDemo.prototype.getNullableDecimal = function (hasValue) {
            return this.http.get(this.baseUri + 'api/SuperDemo/NullableDecimal?hasValue=' + hasValue);
        };
        /**
         * GET api/SuperDemo/NullObject
         */
        SuperDemo.prototype.getNullPerson = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/NullObject');
        };
        /**
         * GET api/SuperDemo/NullString
         */
        SuperDemo.prototype.getNullString = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/NullString');
        };
        /**
         * GET api/SuperDemo/DoubleNullable?location={location}&dd={dd}&de={de}
         */
        SuperDemo.prototype.getPrimitiveNullable = function (location, dd, de) {
            return this.http.get(this.baseUri + 'api/SuperDemo/DoubleNullable?location=' + encodeURIComponent(location) + (dd ? '&dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''));
        };
        /**
         * GET api/SuperDemo/DoubleNullable2?dd={dd}&de={de}
         */
        SuperDemo.prototype.getPrimitiveNullable2 = function (dd, de) {
            return this.http.get(this.baseUri + 'api/SuperDemo/DoubleNullable2?' + (dd ? 'dd=' + dd.toString() : '') + (de ? '&de=' + de.toString() : ''));
        };
        /**
         * GET api/SuperDemo/sbyte
         */
        SuperDemo.prototype.getsbyte = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/sbyte');
        };
        /**
         * GET api/SuperDemo/short
         */
        SuperDemo.prototype.getShort = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/short');
        };
        /**
         * GET api/SuperDemo/TextStream
         */
        SuperDemo.prototype.getTextStream = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/TextStream', { observe: 'response', responseType: 'blob' });
        };
        /**
         * GET api/SuperDemo/uint
         */
        SuperDemo.prototype.getUint = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/uint');
        };
        /**
         * GET api/SuperDemo/ulong
         */
        SuperDemo.prototype.getulong = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ulong');
        };
        /**
         * GET api/SuperDemo/ushort
         */
        SuperDemo.prototype.getUShort = function () {
            return this.http.get(this.baseUri + 'api/SuperDemo/ushort');
        };
        /**
         * POST api/SuperDemo/AnonymousObject
         */
        SuperDemo.prototype.postAnonymousObject = function (obj) {
            return this.http.post(this.baseUri + 'api/SuperDemo/AnonymousObject', JSON.stringify(obj), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/Collection
         */
        SuperDemo.prototype.postCollection = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/Collection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * DateTime and DateTimeOffset may not be represented well in URL, so must put them into the POST body.
         * POST api/SuperDemo/DateTimeOffset
         */
        SuperDemo.prototype.postDateTimeOffset = function (d) {
            return this.http.post(this.baseUri + 'api/SuperDemo/DateTimeOffset', JSON.stringify(d), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/DateTimeOffsetNullable
         */
        SuperDemo.prototype.postDateTimeOffsetNullable = function (d) {
            return this.http.post(this.baseUri + 'api/SuperDemo/DateTimeOffsetNullable', JSON.stringify(d), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/StringPersonDic
         */
        SuperDemo.prototype.postDictionary = function (dic) {
            return this.http.post(this.baseUri + 'api/SuperDemo/StringPersonDic', JSON.stringify(dic), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/ICollection
         */
        SuperDemo.prototype.postICollection = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/ICollection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/IList
         */
        SuperDemo.prototype.postIList = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/IList', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/int2d
         */
        SuperDemo.prototype.postInt2D = function (a) {
            return this.http.post(this.baseUri + 'api/SuperDemo/int2d', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/int2djagged
         */
        SuperDemo.prototype.postInt2DJagged = function (a) {
            return this.http.post(this.baseUri + 'api/SuperDemo/int2djagged', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/intArray
         */
        SuperDemo.prototype.postIntArray = function (a) {
            return this.http.post(this.baseUri + 'api/SuperDemo/intArray', JSON.stringify(a), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/IReadOnlyCollection
         */
        SuperDemo.prototype.postIReadOnlyCollection = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/IReadOnlyCollection', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/IReadOnlyList
         */
        SuperDemo.prototype.postIReadOnlyList = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/IReadOnlyList', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/List
         */
        SuperDemo.prototype.postList = function (list) {
            return this.http.post(this.baseUri + 'api/SuperDemo/List', JSON.stringify(list), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/NextYear
         */
        SuperDemo.prototype.postNextYear = function (dt) {
            return this.http.post(this.baseUri + 'api/SuperDemo/NextYear', JSON.stringify(dt), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/SuperDemo/PostEmpty?s={s}&i={i}
         */
        SuperDemo.prototype.postWithQueryButEmptyBody = function (s, i) {
            return this.http.post(this.baseUri + 'api/SuperDemo/PostEmpty?s=' + encodeURIComponent(s) + '&i=' + i, null, { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * GET api/SuperDemo/SearchDateRange?startDate={startDate}&endDate={endDate}
         */
        SuperDemo.prototype.searchDateRange = function (startDate, endDate) {
            return this.http.get(this.baseUri + 'api/SuperDemo/SearchDateRange?' + (startDate ? 'startDate=' + startDate.toISOString() : '') + (endDate ? '&endDate=' + endDate.toISOString() : ''));
        };
        SuperDemo = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri')),
            __metadata("design:paramtypes", [String, http_1.HttpClient])
        ], SuperDemo);
        return SuperDemo;
    }());
    DemoWebApi_Controllers_Client.SuperDemo = SuperDemo;
    var Tuple = /** @class */ (function () {
        function Tuple(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * GET api/Tuple/PeopleCompany4
         */
        Tuple.prototype.getPeopleCompany4 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/PeopleCompany4');
        };
        /**
         * GET api/Tuple/PeopleCompany5
         */
        Tuple.prototype.getPeopleCompany5 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/PeopleCompany5');
        };
        /**
         * GET api/Tuple/Tuple1
         */
        Tuple.prototype.getTuple1 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple1');
        };
        /**
         * GET api/Tuple/Tuple2
         */
        Tuple.prototype.getTuple2 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple2');
        };
        /**
         * GET api/Tuple/Tuple3
         */
        Tuple.prototype.getTuple3 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple3');
        };
        /**
         * GET api/Tuple/Tuple4
         */
        Tuple.prototype.getTuple4 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple4');
        };
        /**
         * GET api/Tuple/Tuple5
         */
        Tuple.prototype.getTuple5 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple5');
        };
        /**
         * GET api/Tuple/Tuple6
         */
        Tuple.prototype.getTuple6 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple6');
        };
        /**
         * GET api/Tuple/Tuple7
         */
        Tuple.prototype.getTuple7 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple7');
        };
        /**
         * GET api/Tuple/Tuple8
         */
        Tuple.prototype.getTuple8 = function () {
            return this.http.get(this.baseUri + 'api/Tuple/Tuple8');
        };
        /**
         * POST api/Tuple/PeopleCompany2
         */
        Tuple.prototype.linkPeopleCompany2 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany2', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany3
         */
        Tuple.prototype.linkPeopleCompany3 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany3', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany4
         */
        Tuple.prototype.linkPeopleCompany4 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany4', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany5
         */
        Tuple.prototype.linkPeopleCompany5 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany5', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany6
         */
        Tuple.prototype.linkPeopleCompany6 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany6', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany7
         */
        Tuple.prototype.linkPeopleCompany7 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany7', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PeopleCompany8
         */
        Tuple.prototype.linkPeopleCompany8 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PeopleCompany8', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/PersonCompany1
         */
        Tuple.prototype.linkPersonCompany1 = function (peopleAndCompany) {
            return this.http.post(this.baseUri + 'api/Tuple/PersonCompany1', JSON.stringify(peopleAndCompany), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple1
         */
        Tuple.prototype.postTuple1 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple1', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple2
         */
        Tuple.prototype.postTuple2 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple2', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple3
         */
        Tuple.prototype.postTuple3 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple3', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple4
         */
        Tuple.prototype.postTuple4 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple4', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple5
         */
        Tuple.prototype.postTuple5 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple5', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple6
         */
        Tuple.prototype.postTuple6 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple6', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple7
         */
        Tuple.prototype.postTuple7 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple7', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * POST api/Tuple/Tuple8
         */
        Tuple.prototype.postTuple8 = function (tuple) {
            return this.http.post(this.baseUri + 'api/Tuple/Tuple8', JSON.stringify(tuple), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        Tuple = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri')),
            __metadata("design:paramtypes", [String, http_1.HttpClient])
        ], Tuple);
        return Tuple;
    }());
    DemoWebApi_Controllers_Client.Tuple = Tuple;
    var Values = /** @class */ (function () {
        function Values(baseUri, http) {
            if (baseUri === void 0) { baseUri = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/'; }
            this.baseUri = baseUri;
            this.http = http;
        }
        /**
         * DELETE api/Values/{id}
         */
        Values.prototype.delete = function (id) {
            return this.http.delete(this.baseUri + 'api/Values/' + id);
        };
        /**
         * GET api/Values
         */
        Values.prototype.get = function () {
            return this.http.get(this.baseUri + 'api/Values');
        };
        /**
         * GET api/Values/{id}?name={name}
         */
        Values.prototype.getByIdAndName = function (id, name) {
            return this.http.get(this.baseUri + 'api/Values/' + id + '?name=' + encodeURIComponent(name));
        };
        /**
         * GET api/Values?name={name}
         */
        Values.prototype.getByName = function (name) {
            return this.http.get(this.baseUri + 'api/Values?name=' + encodeURIComponent(name));
        };
        /**
         * GET api/Values/{id}
         */
        Values.prototype.getById = function (id) {
            return this.http.get(this.baseUri + 'api/Values/' + id);
        };
        /**
         * POST api/Values
         */
        Values.prototype.post = function (value) {
            return this.http.post(this.baseUri + 'api/Values', JSON.stringify(value), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        /**
         * PUT api/Values/{id}
         */
        Values.prototype.put = function (id, value) {
            return this.http.put(this.baseUri + 'api/Values/' + id, JSON.stringify(value), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
        };
        Values = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject('baseUri')),
            __metadata("design:paramtypes", [String, http_1.HttpClient])
        ], Values);
        return Values;
    }());
    DemoWebApi_Controllers_Client.Values = Values;
})(DemoWebApi_Controllers_Client = exports.DemoWebApi_Controllers_Client || (exports.DemoWebApi_Controllers_Client = {}));
//# sourceMappingURL=WebApiNG2ClientAuto.js.map