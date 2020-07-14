/* eslint-disable import/first, no-unused-vars */

import assert from 'assert';
import sinon from 'sinon';
import crypto from 'crypto';

import Add from './index.js';

describe('index.js', () => {
	describe('default export', () => {
		it('should add two numbers together', () => {
			const result = Add(1, 2);
			assert.ok(result === 3);
		});
	});
});
