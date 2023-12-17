(function() {var implementors = {
"actix_web":[["impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Compress.html\" title=\"struct actix_web::middleware::Compress\">Compress</a><div class=\"where\">where\n    B: <a class=\"trait\" href=\"actix_web/body/trait.MessageBody.html\" title=\"trait actix_web::body::MessageBody\">MessageBody</a>,\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,</div>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.DefaultHeaders.html\" title=\"struct actix_web::middleware::DefaultHeaders\">DefaultHeaders</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,\n    S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,</div>"],["impl&lt;S, T, Req&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Compat.html\" title=\"struct actix_web::middleware::Compat\">Compat</a>&lt;T&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;Req&gt;,\n    T: <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt;,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Future\" title=\"type actix_web::dev::Transform::Future\">Future</a>: 'static,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Response\" title=\"type actix_web::dev::Transform::Response\">Response</a>: MapServiceResponseBody,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Error\" title=\"type actix_web::dev::Transform::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,</div>"],["impl&lt;S, T, Req, BE, BD, Err&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Condition.html\" title=\"struct actix_web::middleware::Condition\">Condition</a>&lt;T&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;Req, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;BD&gt;, Error = Err&gt; + 'static,\n    T: <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, Req, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;BE&gt;, Error = Err&gt;,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Future\" title=\"type actix_web::dev::Transform::Future\">Future</a>: 'static,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.InitError\" title=\"type actix_web::dev::Transform::InitError\">InitError</a>: 'static,\n    T::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Transform.html#associatedtype.Transform\" title=\"type actix_web::dev::Transform::Transform\">Transform</a>: 'static,</div>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.NormalizePath.html\" title=\"struct actix_web::middleware::NormalizePath\">NormalizePath</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,\n    S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,</div>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.ErrorHandlers.html\" title=\"struct actix_web::middleware::ErrorHandlers\">ErrorHandlers</a>&lt;B&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt; + 'static,\n    S::<a class=\"associatedtype\" href=\"actix_web/dev/trait.Service.html#associatedtype.Future\" title=\"type actix_web::dev::Service::Future\">Future</a>: 'static,\n    B: 'static,</div>"],["impl&lt;S, B&gt; <a class=\"trait\" href=\"actix_web/dev/trait.Transform.html\" title=\"trait actix_web::dev::Transform\">Transform</a>&lt;S, <a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>&gt; for <a class=\"struct\" href=\"actix_web/middleware/struct.Logger.html\" title=\"struct actix_web::middleware::Logger\">Logger</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"actix_web/dev/trait.Service.html\" title=\"trait actix_web::dev::Service\">Service</a>&lt;<a class=\"struct\" href=\"actix_web/dev/struct.ServiceRequest.html\" title=\"struct actix_web::dev::ServiceRequest\">ServiceRequest</a>, Response = <a class=\"struct\" href=\"actix_web/dev/struct.ServiceResponse.html\" title=\"struct actix_web::dev::ServiceResponse\">ServiceResponse</a>&lt;B&gt;, Error = <a class=\"struct\" href=\"actix_web/error/struct.Error.html\" title=\"struct actix_web::error::Error\">Error</a>&gt;,\n    B: <a class=\"trait\" href=\"actix_web/body/trait.MessageBody.html\" title=\"trait actix_web::body::MessageBody\">MessageBody</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()