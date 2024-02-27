FROM itsthenetwork/nfs-server-alpine:latest

COPY exports.txt /etc/exports

CMD ["/sbin/rpcbind", "-w", "&", "/usr/sbin/rpc.nfsd", "8", "&", "/usr/sbin/exportfs", "-avr", "&", "/usr/sbin/rpc.mountd", "-N", "2", "-V", "3", "-N", "4", "-V", "4"]