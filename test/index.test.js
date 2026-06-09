const { test } = require('node:test');
const assert = require('node:assert/strict');
const { extractEmails, isValidEmail } = require('..');

test('extractEmails는 사용자 배열에서 이메일만 반환한다', () => {
    const users = [
        { email: 'a@example.com' },
        { email: 'b@example.com' },
    ];
    assert.deepEqual(extractEmails(users), ['a@example.com', 'b@example.com']);
});

test('extractEmails는 배열이 아니면 빈 배열을 반환한다', () => {
    assert.deepEqual(extractEmails(null), []);
    assert.deepEqual(extractEmails('not-array'), []);
});

test('isValidEmail은 유효한 이메일만 true를 반환한다', () => {
    assert.equal(isValidEmail('user@example.com'), true);
    assert.equal(isValidEmail('invalid-email'), false);
    assert.equal(isValidEmail(123), false);
});
