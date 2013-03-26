@ECHO OFF
ECHO 构建中...

if not exist .\_build md .\_build

xcopy /E /Y .\chrome\content\user_guide .\_build\user_guide_bak\ > NUL

for /r .\chrome\content\user_guide %%f in (*.html) do (
  .\_tools\sed.exe -f .\_tools\html.sed "%%f" > "%%f.tmp"
  copy "%%f.tmp" "%%f" > NUL
  del "%%f.tmp"
)

.\_tools\sed.exe -f .\_tools\js.sed .\chrome\content\user_guide\nav\nav.js > .\chrome\content\user_guide\nav\nav.js.tmp
copy .\chrome\content\user_guide\nav\nav.js.tmp .\chrome\content\user_guide\nav\nav.js > NUL
del .\chrome\content\user_guide\nav\nav.js.tmp

copy .\_tools\user_guide_menu.js .\chrome\content\user_guide\nav\user_guide_menu.js > NUL

del .\_build\my_codeigniter-0.1.7.xpi
.\_tools\zip.exe -r -9 -X -q .\_build\my_codeigniter-0.1.7.xpi install.rdf screen.png chrome.manifest chrome defaults

rd /S /Q .\chrome\content\user_guide
xcopy /E /Y .\_build\user_guide_bak .\chrome\content\user_guide\ > NUL
rd /S /Q .\_build\user_guide_bak

ECHO 构建成功！