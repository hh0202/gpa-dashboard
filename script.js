let danhSachMon = [];

window.onload = function(){
    const data = localStorage.getItem('danhSachMon');
    if(data){
        danhSachMon = JSON.parse(data);
        capNhatBang();
    }
}

function themMon(){
    const ma = document.getElementById("maMon").value;
    const ten = document.getElementById("tenMon").value;
    const diem = parseFloat(document.getElementById("diemMon").value);

    if(!ma || !ten || isNaN(diem)|| diem < 0 || diem > 10){
        alert("Vui lòng nhập đúng thông tin");
        return
    }

    danhSachMon.push({ma, ten, diem});
    localStorage.setItem('danhSachMon', JSON.stringify(danhSachMon))
    capNhatBang();

    document.getElementById("maMon").value = '';
    document.getElementById("tenMon").value = '';
    document.getElementById("diemMon").value = '';
}

function capNhatBang(){
    const tbody = document.getElementById("bangMonHoc");
    tbody.innerHTML = "";
    danhSachMon.forEach((mon) => {
        const row = `
        <tr>
            <td>${mon.ma}</td>
            <td>${mon.ten}</td>
            <td>${mon.diem}</td>
        </tr>
        `;
        tbody.innerHTML += row;
    });
}

function xoaTatCa() {
    localStorage.removeItem('danhSachMon');
    danhSachMon = [];
    capNhatBang();
}

function taiFile() {
    const duLieu = JSON.stringify(danhSachMon, null, 2); 
    const blob = new Blob([duLieu], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "danh_sach_mon.txt";
    a.click();

    URL.revokeObjectURL(url); 
}


