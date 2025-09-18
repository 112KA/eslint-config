import { describe, it, expect } from 'vitest'
import { execa } from 'execa'

const eslintBin = './node_modules/.bin/eslint'

describe('eslint config', () => {
  it('good fixtures should have no errors', async () => {
    const goodRes = await execa(eslintBin, ['--format', 'json', 'test/fixtures/good'], { reject: false })
    const stdoutGood = goodRes.stdout || ''
    if (!stdoutGood) console.log('ESLint (good) stderr:', goodRes.stderr)
    const results = JSON.parse(stdoutGood)
    console.log('ESLint results (good):', JSON.stringify(results, null, 2))
    expect(results.length).toBeGreaterThan(0)
    for (const r of results) {
      expect(r.errorCount).toBe(0)
    }
  })

  it('bad fixtures should have errors', async () => {
    const badRes = await execa(eslintBin, ['--format', 'json', 'test/fixtures/bad'], { reject: false })
    const stdoutBad = badRes.stdout || ''
    if (!stdoutBad) console.log('ESLint (bad) stderr:', badRes.stderr)
    const badResults = stdoutBad ? JSON.parse(stdoutBad) : []
    console.log('ESLint results (bad):', JSON.stringify(badResults, null, 2))
    expect(badResults.length).toBeGreaterThan(0)
    let totalErrors = 0
    for (const r of badResults) {
      totalErrors += r.errorCount
    }
    expect(totalErrors).toBeGreaterThan(0)
  })
})
