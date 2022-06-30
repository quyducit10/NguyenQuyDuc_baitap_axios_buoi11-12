var baseUrl = "https://62bc1e79eff39ad5ee1d4237.mockapi.io/teachers";

// Hàm call API lấy danh sách sản phẩm
function apiGetTeachers() {
  return axios({
    url: baseUrl,
    method: "GET",
  });
}

function apiAddTeacher(teacher) {
    return axios({
      url: baseUrl,
      method: "POST",
      data: teacher,
    });
  }