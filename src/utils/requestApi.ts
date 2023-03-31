function requestApi (url: string, {body, method, headers: customHeaders}: RequestInit = {}) {
    const baseUrl = 'https://black-market-juan-rs.herokuapp.com/api/v2'
    const config: RequestInit = {
        method: method || 'GET',
        body: body || null,
        headers: {
          'Content-Type': body ? 'application/json' : '',
          ...customHeaders
        }
      };

    return fetch(baseUrl + url, config);
}

export { requestApi }