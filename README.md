# Project Echo Web Desktop Deploy

## About

This project is a unified platform for deploying both unsupervised and supervised learning models using Golang, Wails, and React. It is designed to run seamlessly on both desktop and web platforms, with flexible deployment options that can be adjusted by setting up an `.env` file. This approach offers a lightweight and efficient alternative to traditional Python-based setups, making it ideal for environments where quick deployment and cross-platform compatibility are critical.

This repository is a variation of the [Project Echo](https://github.com/DataBytes-Organisation/Project-Echo-Web-Desktop-Deploy), focusing on web and desktop deployment capabilities. By leveraging Wails and React, we can create a unified application that runs efficiently across multiple environments, reducing the complexity of maintaining separate codebases for web and desktop versions.

## Deployment Options

### Desktop Mode

In desktop mode, the application is deployed as a standalone executable. This makes it an ideal choice for environments where internet connectivity is limited, or where a more traditional desktop application experience is preferred.

To run the application in desktop mode:

```bash
wails build
```

## Server Mode
For web-based deployment, the application can be run in server mode. This mode spins up a lightweight HTTP server using GoFiber, serving the React frontend along with API routes defined within the application.

To run the application in server mode, ensure that your .env file contains the following line:
```bash
SERVER_MODE=true
```
Then start the server with:
```bash
./your-executable
```


## Live Development
To run in live development mode, use the following command in the project directory:
```bash
wails dev
```

This will start a Vite development server, providing fast hot reload of frontend changes. If you need to develop in a browser while having access to your Go methods, connect to the dev server at http://localhost:34115.



## Building
To create a redistributable, production-mode package, use:
```bash
wails build
```

## Audio Processing Dependencies
The project includes functionality for processing audio files into spectrograms, which requires FFmpeg.

## Installing FFmpeg

Linux
```bash
sudo apt update
sudo apt install ffmpeg
```

Windows
- Download the latest FFmpeg build from FFmpeg's official site.
- Extract the downloaded file.
- Add the bin directory (which contains ffmpeg.exe) to your system's PATH:
- Search for "Environment Variables" in the Windows Start Menu.
- Under "System Properties" -> "Advanced" -> "Environment Variables", find the "Path" variable under "System - variables" and click "Edit".
- Add the path to the bin directory of the extracted FFmpeg files.
- Click "OK" to apply the changes.


Verify Installation:
```bash
ffmpeg -version
```

## Why This Approach?

By combining Golang, Wails, and React, this project offers a streamlined, cross-platform solution for deploying machine learning models. It provides a unified development experience where the same codebase can be deployed on both web and desktop platforms. This is especially beneficial compared to more traditional setups that might require maintaining separate repositories for web and desktop versions.

Moreover, by using Wails, you gain access to native performance on desktop environments, while still being able to leverage modern web technologies like React. This combination allows for faster iteration, easier deployment, and more efficient resource usage, particularly when dealing with large-scale unsupervised and supervised learning tasks.

The project structure also supports a smooth transition between development and production environments, thanks to the flexibility of environment variables and the lightweight nature of GoFiber for server mode.


## Backend Code Overview

The backend code is structured to efficiently handle audio processing and clustering tasks using Golang. The code includes features like:

- Elbow Method for Optimal Clusters: This functionality calculates the optimal number of clusters for a given dataset using the elbow method, making it suitable for unsupervised learning tasks.
- Spectrogram Generation: Audio files are processed into spectrograms using FFmpeg and Golang, enabling both real-time and batch processing capabilities.
- Cross-Platform Compatibility: By leveraging Wails, the project runs smoothly across both Windows and Linux environments, with native desktop capabilities.


The project's codebase has been meticulously designed to ensure scalability, efficiency, and ease of deployment across different platforms, making it an excellent choice for both research and production environments.

## Conclusion

This repository represents a significant step forward from the original Project Echo by introducing a hybrid deployment model that bridges the gap between web and desktop applications. By doing so, it provides flexibility and efficiency, allowing users to choose the best deployment strategy based on their specific needs.

The use of Golang, Wails, and React ensures that the application is both lightweight and performant, making it a strong candidate for various machine learning tasks. Whether you’re looking to deploy on a desktop environment or run a web server, this project offers the tools and infrastructure needed to succeed.