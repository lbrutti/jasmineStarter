const Greetings = (()=>{
    function _hello(){
        return "hello";
    }

    return {
        hello:_hello
    };
})();

module.exports = Greetings;