// import {getStrValue, isObjNull} from "./c";

function isObjNull(obj) {
  for (var name in obj) {
    return false;
  }
  return true;
}

export default {fetchPost, fetchGet}

function fetchPost(url, params, header) {
  if (isObjNull(header)) {
    header = {};
  }

  let formData = new FormData();
  if (params) {
    for (let key in params) {
      formData.append(key, params[key]);
    }
  }

  const request = fetch(url, {
    method: "POST",
    body: formData,
    mode: "cors",
    headers: new Headers({
      Accept: "application/json",
      ...header
    })
  });

  return fetchResult(request);
}

function fetchGet(url, params, header) {
  if (isObjNull(header)) {
    header = {};
  }

  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(
        key + "=" + params[key]
      )
    );

    if (paramsArray.length > 0) {
      if (url.search(/\?/) === -1) {
        url += "?" + paramsArray.join("&");
      } else {
        url += "&" + paramsArray.join("&");
      }
    }
  }

  const request = fetch(url, {
    method: "GET",
    mode: "cors",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      ...header
    })
  });

  return fetchResult(request);
}

/**
 * 处理网络请求结果
 * @param request
 * @returns {*}
 */
function fetchResult(request) {
  try {
    return request
      .then(response => {
        if (response.status === 200) {
          return response;
        } else {
          throw response;
        }
      })
      .catch(error => {
        if (error.json) {
          return error.json();
        } else {
          return Promise.reject("请求异常");
        }
      })
      .then(result => {
        if (result.status === 200) {
          let resultJson = result.json();
          return resultJson;
        } else {
          throw result;
        }
      })
      .then(result => {
        if (result.items.length > 0) {
          return result;
        } else {
          if (result.exceptionInfo) {
            throw result.exceptionInfo;
          } else if (result.message) {
            throw result.message;
          } else {
            throw result;
          }
        }
      });
  } catch (e) {
    return Promise.reject("请求异常");
  }
}
