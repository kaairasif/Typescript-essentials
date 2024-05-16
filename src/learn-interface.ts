interface Customer {
    cname: string,
    address: string
}

const hm: Customer = {
    cname: 'AA',
    address: "HK"
}

class GoldenChase implements Customer {
    cname: string;
    address: string;

    constructor(cname: string, address: string) {
        this.cname = cname;
        this.address = address;
    }
}

const abc = new GoldenChase('ABCD', "D")

console.log(abc.cname)
