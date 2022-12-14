// inter-dream
$(setTimeout(function () {



    if (!confirm("그 꿈은 뭔가요?\n예전과 같은가요?")) {
        //   '아니오'라고 대답

        // dream4로 이동

        location.href = "https://parksangeun2016212014.github.io/dream4";

        // '예'라고 대답
    } else {
        alert("그만큼 소중한 꿈인가봐요. 한결같은 당신이 부럽네요.")
        // dream5로 이동
        location.href = "https://parksangeun2016212014.github.io/dream5";

    }

}, 1000));