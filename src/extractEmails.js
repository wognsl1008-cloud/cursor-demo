// 사용자 배열에서 이메일만 추출하는 함수
function extractEmails(users) {
    if (!Array.isArray(users)) {
        return [];
    }
    return users.map((user) => user.email);
}

module.exports = { extractEmails };
