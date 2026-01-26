---
sidebar_position: 3
title: "REST API and SDK"
---

# REST API and SDK

<div style={{textAlign: 'center'}}>
  <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/rest_sdk.gif" target="_blank">
    <img src="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-480thumbnails/rest_sdk_thumbnail.gif" alt="REST API and SDK" />
  </a>
  <p style={{fontStyle: 'italic'}}>
    <a href="https://raw.githubusercontent.com/AzureAnimations/AzureAnimations.github.io/main/static/images/animations-high-resolutions/AI/rest_sdk.gif" target="_blank">Click to download in HD size</a>
  </p>
</div>

## What is REST?

REST (Representational State Transfer) is an architectural style used for designing networked applications. It relies on HTTP requests to communicate between clients and servers.

### Key Concepts of REST

- **HTTPS**: Secure communication protocol
- **Request**: A call made to the server
- **Response**: The data returned by the server
- **JSON**: A lightweight data format used for exchanging information
- **Key**: Authentication method for API access

## Understanding SDK and REST API Usage

Azure provides different ways to integrate AI and cloud services into applications:

### 1 SDK Supported Languages

- **Languages:** C#, Python, and others
- **SDK Usage:**
  - Developers can use pre-built SDKs, which simplify the process of making API calls
  - SDKs handle HTTP requests and responses internally, allowing developers to interact with services using concise, high-level code
- **Example Services:**
  - AI Search
  - Azure OpenAI

### 2 Non-Supported SDK Languages

- **Languages:** Dart, Swift, and others
- **Manual Implementation:**
  - Developers must send HTTPS requests manually, handling request formatting, authentication, and response parsing
- **Example Services:**
  - Computer Vision
  - Translator

## Choosing the Right Approach

| Feature | SDK Supported Languages | Non-Supported SDK Languages |
|---------|------------------------|----------------------------|
| Ease of Use |  Simplified API calls |  Manual request handling |
| Performance |  Optimized for efficiency |  Requires more development effort |
| Flexibility |  SDK handles authentication and requests |  Full control over API implementation |

## Conclusion

When working with Azure services, choosing **SDK-supported languages** can significantly reduce development time. However, for languages that lack SDK support, developers can still use REST APIs by manually implementing HTTP requests and responses.

