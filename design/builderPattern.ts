interface ApiRequest {
    url: string;
    method: string;
    headers: Record<string, string>;
    body?: string;
}

class HttpRequestBuilder implements ApiRequest {
    url: string = '';
    method: string = '';
    headers: Record<string, string> = {};
    body?: string;

    setUrl(url: string): HttpRequestBuilder {
        this.url = url;
        return this;
    }

    setMethod(method: string): HttpRequestBuilder {
        this.method = method;
        return this;
    }

    setHeaders(headers: Record<string, string>): HttpRequestBuilder {
        this.headers = headers;
        return this;
    }

    setBody(body: string): HttpRequestBuilder {
        this.body = body;
        return this;
    }

    withBearerToken(token: string): HttpRequestBuilder {
        this.headers['Authorization'] = `Bearer ${token}`;
        return this;
    }

    public build(): ApiRequest {
        if (!this.url) {
            throw new Error("Url is not provided")
        }
        return {
            url: this.url,
            method: this.method,
            headers: this.headers,
            body: this.body,
        };
    }

    static create(): HttpRequestBuilder {
        return new HttpRequestBuilder();
    }
}


const request = HttpRequestBuilder.create()
.setUrl("https://fakestoreapi.com/products/1")
.setMethod("GET")
.withBearerToken("token")
.build();
