export const LoadScript = function(url){
    const script = document.createElement("script");
    script.src = url;
    script.type = 'text/javascript';

    const body = document.getElementsByTagName("body")[0];

    body.append(script);
}