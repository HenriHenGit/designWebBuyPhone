var xnHistory = document.querySelector('.transactions .transaction .sp ul .badge-danger');
var xlHistory = document.querySelector('.transactions .transaction .sp ul .badge-success');
var dHistory = document.querySelector('.transactions .transaction .sp ul .badge-primary');
var kkkHistory = document.querySelector('.transactions .transaction .sp ul li:nth-child(6)');
var okHistory = document.querySelector('.transactions .transaction .sp:nth-child(5) ul li:nth-child(6) a');

xnHistory.onclick = function() {
    var xn = confirm('Ban muốn hủy đơn');
    if (xn){
        xnHistory.style.display = 'none';
        xlHistory.style.display = 'none';
        dHistory.style.display = 'none';
        kkkHistory.innerHTML = '<a href="#" class="badge badge-secondary">Đã hủy</a>';
    }
};
okHistory.onclick = function() {
    alert('Lí do hủy: Đổi ý');
};