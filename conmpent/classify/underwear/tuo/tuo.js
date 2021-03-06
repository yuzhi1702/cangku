/**
 * Created by lh1214029722 on 2017/6/30.
 */

angular.module('tuoModule',['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('tuo', {
                url: '/tuo',
                templateUrl: 'conmpent/classify/underwear/tuo/tuo.html',
                controller:'tuoCtrl',
                css:['conmpent/classify/underwear/tuo/tuo.css']
            })
    })
    .service('getData8',['$http',function ($http) {
        this.get=function (data) {
            return $http.get(data);
        }
    }])
    .service('swiper',['$timeout',function($timeout){
        this.swiper = function(){
            $timeout(function(){

                var mySwiper = new Swiper ('.swiper-container', {
//					    direction: 'vertical',
                    autoplayDisableOnInteraction:true,
                    loop: true,
                    // 如果需要分页器
                    pagination: '.swiper-pagination',
                })
            })
        }
    }])
    .controller("tuoCtrl",["$scope",'$http','getData8','swiper',function ($scope,$http,getData8,swiper) {

        getData8.get('json/zi7.json').then(function (rea) {
            $scope.arr = rea;
            console.log(rea.data.result);
            swiper.swiper();

            console.log()
        })
        var toTuo=JSON.parse(localStorage.getItem('toTuo'));
        $scope.orr=toTuo;
        console.log(toTuo);

        $scope.ass=function(tuo){
            var adcs=[ ];
            adcs = JSON.parse(localStorage.getItem('adcs'));
            adcs.push(tuo);
            localStorage.setItem('adcs',JSON.stringify(adcs))
            console.log( localStorage.getItem('adcs'))
        }
    }])




