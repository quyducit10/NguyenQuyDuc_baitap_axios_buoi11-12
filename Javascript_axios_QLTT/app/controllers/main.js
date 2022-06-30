
  main();

function main() {
  apiGetTeachers().then(function (result) {
    var teachers = result.data;
    for (var i = 0; i < teachers.length; i++) {
      var teacher = teachers[i];
      teachers[i] = new Teacher(
        teacher.id,
        teacher.taiKhoan,
        teacher.hoTen,
        teacher.matKhau,
        teacher.email,
        teacher.loaiND,
        teacher.ngonNgu,
        teacher.moTa,
        teacher.hinhAnh,
      );
    }
    // Gọi hàm display để hiển thị danh sách sản phẩm ra giao diện
    display(teachers);
  });
}
function display(teachers) {
    var html = "";
    for (var i = 0; i < teachers.length; i++) {
      var teacher = teachers[i];
      html += `
        <tr>
          <td>${i + 1}</td>
          <td>${teacher.taiKhoan}</td>
          <td>${teacher.matKhau}</td>
          <td>${teacher.hoTen}</td>
          <td>${teacher.email}</td>
          <td>${teacher.ngonNgu}</td>
          <td>${teacher.ngonNgu}</td>
          <td>${teacher.moTa}</td>
          <td>
            <button
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              data-type="update"
              data-id="${teacher.id}"
            >
              Cập Nhật
            </button>
            <button
              class="btn btn-danger"
              data-type="delete"
              data-id="${teacher.id}"
            >
              Xoá
            </button>
          </td>
        </tr>
      `;
    }
    // DOM tới tbody và innerHTML bằng biến html
    document.getElementById("tblDanhSachNguoiDung").innerHTML = html;
  }