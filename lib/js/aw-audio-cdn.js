/* Audio CDN resolver.
   English narration stays on GitHub Pages; non-English clips (es/ja/ko/pt) are served from a
   public Supabase Storage bucket that mirrors the repo-relative path, e.g.
     journeys/AI/AI500/audio/CourseIntro/es/step-01.mp3
   Upload with: node scripts/upload-audio-cdn.mjs
   To switch CDN, change AW_AUDIO_CDN only. Add ?localaudio=1 to a page URL to bypass the CDN. */
(function () {
	var AW_AUDIO_CDN = 'https://ccegdfemxygwboertsth.supabase.co/storage/v1/object/public/audio/';
	window.awAudioUrl = function (base, lang, file) {
		if (!lang || lang === 'en' || /[?&]localaudio=1/.test(location.search)) {
			return base + (lang && lang !== 'en' ? lang + '/' : '') + file;
		}
		var path = new URL(base, location.href).pathname.replace(/^\/+/, '');
		return AW_AUDIO_CDN + path + lang + '/' + file;
	};
})();
