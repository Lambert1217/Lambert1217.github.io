document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("wechatModal");
    var btn = document.getElementById("wechatLink");
    var span = document.getElementsByClassName("close")[0];
    var profileCard = document.getElementById("profileCard");

    btn.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // 显示个人资料卡
    setTimeout(function() {
        profileCard.classList.add("show");
    }, 500);

    const quoteElement = document.getElementById("quote");
    const defaultQuote = "生活就像一盒巧克力，你永远不知道下一颗是什么味道。";

    fetch("https://v1.hitokoto.cn/?c=f&encode=text")
        .then(response => response.text())
        .then(data => {
            if (data && data.trim().length > 0) {
                quoteElement.textContent = data;
            } else {
                quoteElement.textContent = defaultQuote;
            }
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteElement.textContent = defaultQuote;
        });
});