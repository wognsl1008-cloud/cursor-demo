const { extractEmails, isValidEmail } = require('./src');

// 직접 실행 시 데모 출력
if (require.main === module) {
    console.log('hello cursor');

    const users = [
        { email: 'test@example.com' },
        { email: 'invalid-email' },
    ];
    const emails = extractEmails(users);
    const validEmails = emails.filter(isValidEmail);

    console.log('extracted:', emails);
    console.log('valid:', validEmails);
}

module.exports = { extractEmails, isValidEmail };
