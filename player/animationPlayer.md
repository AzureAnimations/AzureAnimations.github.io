# Azure Animation Player Documentation

## Overview

The Azure Animation Player is a customizable HTML5 video player for Azure tutorial animations. It provides playback controls, speed adjustments, auto-pause functionality, and fullscreen support.

![2025-03-13 14_59_09-Epic Pen Content Surface_ __ _DISPLAY1](https://github.com/user-attachments/assets/491e28d9-8203-403e-b15d-5ff69cfb9177)

## Features

- **Playback Controls**: Play/Pause, Auto-pause at specific timestamps
- **Speed Controls**: 0.5x, 0.75x, 1x, 1.25x, 1.5x playback speeds
- **Fullscreen Support**: Toggle fullscreen mode
- **Custom Title**: Display custom animation titles
- **Auto-Pause Points**: Set multiple pause points throughout the video
- **Security**: Domain-restricted to azureanimations.github.io
- **Responsive Design**: Adapts to different screen sizes

## URL Parameters

### Basic URL Structure
```
azureanimation-autopause-player.html?vdo=VIDEO_URL&animationTitle=TITLE&pauseTimes=TIME1,TIME2,TIME3
```

### Required Parameters

- **vdo**: Video URL (must be from azureanimations.github.io domain)
  ```
  vdo=https://azureanimations.github.io/images/animations-high-resolutions/Storage/Storage-Account-SAS-Vdo.mp4
  ```

### Optional Parameters

- **animationTitle**: Custom title for the animation (URL-encoded)
  ```
  animationTitle=Blob%20Storage%20Shared%20Access%20Signature
  ```

- **pauseTimes**: Comma-separated timestamps in seconds for auto-pause
  ```
  pauseTimes=5,10,15,20
  ```

## Usage Examples

1. **Basic Player with Title**
```
azureanimation-autopause-player.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Storage/Storage-Account-SAS-Vdo.mp4&animationTitle=Blob%20Storage%20Shared%20Access%20Signature
```

2. **Player with Auto-Pause Points**
```
azureanimation-autopause-player.html?vdo=https://azureanimations.github.io/images/animations-high-resolutions/Storage/Storage-Account-SAS-Vdo.mp4&animationTitle=Blob%20Storage%20Shared%20Access%20Signature&pauseTimes=5,10,15,20
```

## Important Notes

1. **Auto-Pause Functionality**
   - Only works at 1x playback speed
   - Disabled automatically when speed is changed
   - Requires valid pauseTimes parameter

2. **Video Source Security**
   - Only accepts videos hosted on azureanimations.github.io
   - Shows error message for invalid sources

3. **Controls**
   - Space bar or video click toggles play/pause
   - ESC key exits fullscreen mode
   - Speed changes disable auto-pause feature

## Error Handling

- Invalid video sources display an error message
- Play button is disabled for invalid sources
- Auto-pause is disabled if pauseTimes parameter is missing or invalid

## Browser Compatibility

- Supports modern browsers (Chrome, Firefox, Safari, Edge)
- Requires HTML5 video support
- Fullscreen API support required for fullscreen functionality
