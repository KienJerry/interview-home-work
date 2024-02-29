import * as moment from 'moment'

export function getGMTTime(time: Date, GMT = null) {
    if (!time) {
        return null;
    }
    if (typeof (time.getTime) !== 'function')
        time = new Date(time);
    if (GMT) {
        let gmtDate = new Date(time.getTime() - ((Number(GMT) * (-60)) * 60 * 1000))
        return gmtDate;
    }
    let gmtDate = new Date(time.getTime() - (time.getTimezoneOffset() * 60 * 1000))
    return gmtDate;
}

export const getUTCTime = (time: Date) => {
    if (!time) {
        return null;
    }
    if (typeof (time.getTime) !== 'function')
        time = new Date(time);
    let utcDate = new Date(time.getTime() - (time.getTimezoneOffset() * 60 * 1000 * (-1)))
    return utcDate;
}

export const getNowUTCTime = () => {
    return getUTCTime(new Date());
}

export const JoinNotNull = (input: string[], seperator = ' ') => {
    return input.map(x => x.trim()).filter(x => x != null && x !== '').join(seperator)
}

export const TodayIsBirth = (birth_day) => {
    return birth_day === moment().format('YYYY-MM-DD');
}

export const FormatPhoneNumber = (phone_number) => {
    return phone_number.substr(phone_number.length - 9)
}

export function DataMapper<B>(source: any, dest: B): B {
    Object.keys(dest).forEach((key) => {
        if (source[key] == null) return;
        dest[key] = source[key]
    })
    return dest
}

export function ReplaceChar(ori, replaceBy, idx) {
    let newStringArray = ori.split("");
    newStringArray[idx] = replaceBy;
    return newStringArray.join("");
}

export const GroupObjToExpandMenuCode = (array) => {
    const groupParentId = array.reduce((group, item) => {
        const { parent_id } = item;
        group[parent_id] = group[parent_id] ?? [];
        group[parent_id].push(item);
        return group;
    }, {});

    const results = []
    for (let [key, value] of Object.entries(groupParentId)) {
        if (Array.isArray(value)) {
            if (value.length === 1) {
                results.push({ ...value[0], menu_expand_name: value[0]?.menu_name })
            } else if (value.length === 2) {
                results.push({ ...value[0], menu_expand_name: value[0]?.menu_name + ' ' + value[1]?.menu_name })
                results.push({ ...value[1], menu_expand_name: value[0]?.menu_name + ' ' + value[1]?.menu_name })
            }
        }
    }

    return results
};


export const Vat8 = (items) => {
    // return items.filter(x => x?.tax_value === 8).reduce((x, y) => x + (y.price + (y.price * (y?.tax_value / 100)) * y.quantity), 0)
    return items.filter(x => x?.selling_tax_percentage === 8).reduce((x, y) => x + ((y.byod_price * (y?.selling_tax_percentage / 100)) * y.quantity), 0)
}

export const Vat10 = (items) => {
    return items.filter(x => x?.selling_tax_percentage === 10).reduce((x, y) => x + ((y.byod_price * (y?.selling_tax_percentage / 100)) * y.quantity), 0)
}

export const TotalPrice = (items) => {
    return items.reduce((x, y) => x + (y.byod_price * y.quantity), 0)
}

export const FlattenObj = (obj, parent, res = {}) => {
    for (let key in obj) {
        let propName = parent ? parent + '_' + key : key;
        if (typeof obj[key] == 'object') {
            FlattenObj(obj[key], propName, res);
        } else {
            res[propName] = obj[key];
        }
    }
    return res;
}


export const UniqueArray = (array) => {
    // loai trùng addon
    return array.filter((v, i, a) => a.findIndex(v2 => (v2.productItems.id === v.productItems.id && v2.type === v.type)) === i)
}

export const UniqueArrayItem = (array) => {
    // loai trùng addon
    return array.filter((v, i, a) => a.findIndex(v2 => (v2.menu_code === v.menu_code)) === i)
}

export const AddZeroBefore = (number, length = 6) => {
    let zeroString = '';
    for (let i = 0; i < length; i++) {
        zeroString += '0';
    }
    let res = (zeroString + number).slice(-(length))
    return res
}

export const GetKeyByValue = (obj, value) => {
    return Object.keys(obj).find(key => value?.includes(obj[key]));
}

export class GeneratePasswdClass {
    constructor() { }

    Pick(str: string, min: number, max: number) {
        var n,
            chars = '';
        if (typeof max === 'undefined') {
            n = min;
        } else {
            n = min + Math.floor(Math.random() * (max - min + 1));
        }
        for (var i = 0; i < n; i++) {
            chars += str.charAt(Math.floor(Math.random() * str.length));
        }
        return chars;
    }

    Shuffle(str: string) {
        var array = str.split('');
        var tmp,
            current,
            top = array.length;
        if (top)
            while (--top) {
                current = Math.floor(Math.random() * (top + 1));
                tmp = array[current];
                array[current] = array[top];
                array[top] = tmp;
            }
        return array.join('');
    }

    GeneratePassword = () => {
        var specials = `~!@#$%^&*`;
        var lowercase = 'abcdefghijklmnopqrstuvwxyz';
        var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numbers = '0123456789';
        var all = specials + lowercase + uppercase + numbers;
        var password = '';
        password += this.Pick(specials, 2, 2);
        password += this.Pick(lowercase, 1, 1);
        password += this.Pick(uppercase, 1, 1);
        password += this.Pick(numbers, 1, 1);
        password += this.Pick(all, 5, 5);
        password = this.Shuffle(password);
        return password;
    }

}
