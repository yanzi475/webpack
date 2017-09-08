/**
 * Created by haiyanSong on 2017/9/7.
 */


const $ = require('../lib/zepto.min.js');

module.exports = function(){
    var  button = $('.wepack');

    $('.wepack').on('click', function(e){
        //todo
        alert("test webpack example");
        $('.wepack').textContent("change text")

    })

}
