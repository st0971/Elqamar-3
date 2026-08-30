/* =====================================================
           導覽列切換
           ===================================================== */

        function showPage(pageId, button) {


            const pages =
                document.querySelectorAll(".page");


            const buttons =
                document.querySelectorAll(".nav-btn");


            /*
            隱藏所有頁面
            */

            pages.forEach(function(page) {

                page.classList.remove("active");

            });


            /*
            移除所有按鈕的 active
            */

            buttons.forEach(function(btn) {

                btn.classList.remove("active");

            });


            /*
            顯示目前選擇的頁面
            */

            document
                .getElementById(pageId)
                .classList.add("active");


            /*
            標示目前的導覽按鈕
            */

            button.classList.add("active");


            /*
            回到頁面頂部
            */

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }