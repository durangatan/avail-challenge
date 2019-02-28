module RequestSpecHelper
  # Parse JSON response to ruby hash
  def json
    JSON.parse(response.body)
  end

  def get_with_token(path, params={}, headers={})
    headers.merge!('Authorization: Token' => @token)
    get path, params: params, headers: headers
  end

  def post_with_token(path, params={}, headers={})
    headers.merge!('Authorization: Token' => @token)
    post path, params: params, headers:headers
  end

  def put_with_token(path, params={}, headers={})
    headers.merge!('Authorization: Token' => @token)
    put path, params: params, headers:headers
  end

  def delete_with_token(path, params={}, headers={})
    headers.merge!('Authorization: Token' => @token)
    delete path, params: params, headers:headers
  end

  def login_and_get_token(credentials={email:'admin@mail.com', password:'secret'})
    post '/login', params: credentials
    @token = json['token']
  end

end
