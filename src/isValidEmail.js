function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    // 간단한 이메일 정규식 패턴 사용
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

module.exports = { isValidEmail };
