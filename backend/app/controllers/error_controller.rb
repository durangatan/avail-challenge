class ErrorController < ActionController::API
    include Response

    def not_implemented
        json_response({}, :not_found)
    end

end
  