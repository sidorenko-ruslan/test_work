cd ~
mkdir test_project
cd test_project
git clone https://github.com/sidorenko-ruslan/test_work.git
cd test_work
pip install tornado
python tornado_server.py &
nmp install
nmp start
