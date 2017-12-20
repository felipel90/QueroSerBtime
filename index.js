function UrlParse () {
  
  const regexExpressions = [
    {
      regex: /^(http[s]?):\/\/?(\w{1,3})\.([\w\.]+)\/?([^?]+)?\??([^\?]+)?/,
      groups: {
        1: 'protocol',
        2: 'host',
        3: 'domain',
        4: 'path',
        5: 'parameters'
      }
    }, 
    {
      regex: /(ssh):\/\/(\w+)\%(.+)\@([^\/]+)/,
      groups: {
        1: 'protocol',
        2: 'user',
        3: 'pass',
        4: 'domain'
      }
    }
  ]

  function isValid (value) {
    const mapResult = regexExpressions.map((expression) => {
      const match = value.match(expression.regex)
      if (!match) return false
      const result = {}
      match.forEach((value, index) => {
        const key = expression['groups'][index]
        if (key) result[key] = value
      })
      return result
    }).filter(result => !!result)
    return mapResult.length && mapResult[0]
  }

  return { isValid }
}

const isHttpValid = UrlParse().isValid('http://www.google.com/mail?user=fulano')
const isSshValid = UrlParse().isValid('ssh://fulano%senha@git.com/')

// Result
console.log('is HTTP valid', isHttpValid);
console.log('is SSH valid', isSshValid);