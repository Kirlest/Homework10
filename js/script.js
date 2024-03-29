window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
    
        hideTabContent(1);

        function showTabContant(b) {
            if (tabContent[b].classList.contains('hide')){
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(event){
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for ( let i = 0; i < tab.length; i++){
                    if (target == tab[i]) {
                        hideTabContent(0);
                        showTabContant(i);
                        break;
                    }
                }
            }
        });

        //timer

        let deadline = '2019-12-10';

        function getTimeRemaining(endtime) {
            let t = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor(t/(1000*60*60));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds 
            };
        }

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                if (t.hours < 10) {
                    hours.textContent = '0' + t.hours;
                }else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent = '0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                
                if (t.seconds < 10){
                    seconds.textContent = '0' + t.seconds;
                } else { 
                    seconds.textContent = t.seconds;
                }
                if(t.total <=0){
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }    


        }

        setClock ('timer', deadline);

        //modal window
         let showModal = function() {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        };

        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            descriptBtn = document.querySelectorAll('.description-btn');

       //     descriptBtn.addEventListener('click', showModal);

            more.addEventListener('click', showModal);

            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';

            });

          for (let i = 0; i < descriptBtn.length; i++) {
              descriptBtn[i].addEventListener('click', showModal);
        };
            




});