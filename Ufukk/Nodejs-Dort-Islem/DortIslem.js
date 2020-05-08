class MatematikIslemleri{
    static toplama(x, y){
        return x + y ;
    }
    static carpma(x, y){
        return x * y ;
    }
    static bolme(x, y){
        return x / y ;
    }
    static cikarma(x, y){
        return x - y ;
    }

}

module.exports = {
    toplama : MatematikIslemleri.toplama ,
    carpma : MatematikIslemleri.carpma ,
    bolme : MatematikIslemleri.bolme ,
    cikarma : MatematikIslemleri.cikarma

}