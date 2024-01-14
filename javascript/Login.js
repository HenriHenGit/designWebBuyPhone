var LoginForm = document.getElementById("loginForm");
var RegForm = document.getElementById("regForm");
var clickReg = document.querySelector('.bottom:nth-child(2)');
var clickLog = document.querySelector('.bottom:nth-child(1)');
clickReg.onclick = function() {
    register();
};
clickLog.onclick = function() {
    login();
};

function register(){
    RegForm.style.transform = "translateX(-350px)";
    LoginForm.style.transform = "translateX(-350px)";
}

function login(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(-40px)";
}


// kiem tra cac gia tri nhap vao
function validator(ok){
    var formPt = document.querySelector(ok.form);
    if(formPt){
        // khi submit khong chuyen trang khac
        formPt.onsubmit = function(e) {
            e.preventDefault();
            ok.rules.forEach(function(rule) {
                var inputPt = formPt.querySelector(rule.review);
                var warningPt = inputPt.parentElement.querySelector('.fMess');
                var warningM = rule.test(inputPt.value);
                    if(warningM) {
                        warningPt.innerText = warningM;
                        warningPt.parentElement.classList.add('red');
                    }
                    else{
                        warningPt.innerText = '';
                        warningPt.parentElement.classList.remove('red');
                    }
            });
        }
        ok.rules.forEach(function (rule) {
            var inputPt = formPt.querySelector(rule.review);
            var warningPt = inputPt.parentElement.querySelector('.fMess');
            if(inputPt) {
                // dua chuot ra ngoai khi chua go se bao loi
                inputPt.onblur = function() {
                    var warningM = rule.test(inputPt.value);
                    if(warningM) {
                        warningPt.innerText = warningM;
                        warningPt.parentElement.classList.add('red');
                    }
                    else{
                        warningPt.innerText = '';
                        warningPt.parentElement.classList.remove('red');
                    }
                }
                inputPt.oninput = function() {
                    var warningPt = inputPt.parentElement.querySelector('.fMess');
                    warningPt.innerText = '';
                    inputPt.parentElement.classList.remove('red');
                }
            }
        });
    }
}

validator.isFullName = function(review) {
    return {
        review: review,
        test: function(variable) {
            return variable.trim() ? undefined : 'Bạn đã nhập sai, mời bạn nhập lại';
        }
    };
}
validator.isEmail = function(review) {
    return {
        review: review,
        test: function(variable) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(variable) ? undefined : 'Vui lòng nhập email';
        }
    };
}
validator.isPassWord = function(review) {
    return {
        review: review,
        test: function(variable) {
            var match = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
            return match.test(variable) ? undefined : 'Mật khẩu chứa ít nhất 6 kí, 1 kí tự hoa, thường, số';
        }
    };
}
validator.isRetypePass = function(review, currentPassword) {
    return {
        review: review,
        test: function(variable) {
            return variable === currentPassword() ? undefined : 'Mật khẩu nhập lại không hợp lệ';
        }
    };
}

validator({
    form: '#regForm',
    rules: [
      validator.isFullName('#full-name'),
      validator.isFullName('#account'),
      validator.isFullName('#phone-number'),
      validator.isFullName('#address'),
      validator.isEmail('#email'),
      validator.isPassWord('#pass'),
      validator.isRetypePass('#retype-pass', function() {
        return document.querySelector('#regForm #pass').value;
      }),
    ]
});